import { Controller, Post, Body } from '@nestjs/common';
import { InterviewTestsService } from './interview-tests.service';
import { CreateInterviewTestDto } from './dto/create-interview-test.dto';

@Controller('interview-tests')
export class InterviewTestsController {
  constructor(private readonly service: InterviewTestsService) {}

  @Post()
  async create(@Body() dto: CreateInterviewTestDto) {
    const created = await this.service.create(dto);
    return { statusCode: 201, data: created };
  }
}
