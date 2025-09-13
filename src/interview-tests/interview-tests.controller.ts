import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  BadRequestException,
  HttpCode,
} from '@nestjs/common';
import { InterviewTestsService } from './interview-tests.service';
import { CreateInterviewTestDto } from './dto/create-interview-test.dto';
import { UpdateInterviewTestDto } from './dto/update-interview-test.dto';

@Controller('interview-tests')
export class InterviewTestsController {
  constructor(private readonly service: InterviewTestsService) {}

  // Create
  @Post()
  async create(@Body() dto: CreateInterviewTestDto) {
    return this.service.create(dto);
  }

  // Read all with optional filter (field_3 = boolean, or field_2 range)
  @Get()
  async findAll(
    @Query('flag') flag?: string,
    @Query('min') min?: string,
    @Query('max') max?: string,
  ) {
    if (flag !== undefined) {
      if (flag !== 'true' && flag !== 'false') {
        throw new BadRequestException('flag must be true or false');
      }
      return this.service.findByBoolean(flag === 'true');
    }

    if (min && max) {
      const minNum = Number(min);
      const maxNum = Number(max);
      if (isNaN(minNum) || isNaN(maxNum)) {
        throw new BadRequestException('min and max must be numbers');
      }
      return this.service.findByRange(minNum, maxNum);
    }

    return this.service.findAll();
  }

  // Read one by id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  // Update
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInterviewTestDto,
  ) {
    return this.service.update(id, dto);
  }

  // Delete
  @Delete(':id')
  @HttpCode(204) // success, no content
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
