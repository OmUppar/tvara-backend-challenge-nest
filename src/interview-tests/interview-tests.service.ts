import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { InterviewTest } from './entities/interview-test.entity';
import { CreateInterviewTestDto } from './dto/create-interview-test.dto';
import { UpdateInterviewTestDto } from './dto/update-interview-test.dto';

@Injectable()
export class InterviewTestsService {
  constructor(
    @InjectRepository(InterviewTest)
    private repo: Repository<InterviewTest>,
  ) {}

  create(dto: CreateInterviewTestDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const record = await this.repo.findOne({ where: { id } });
    if (!record) throw new NotFoundException(`Record with ID ${id} not found`);
    return record;
  }

  async update(id: number, dto: UpdateInterviewTestDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const record = await this.findOne(id);
    await this.repo.remove(record);
    return;
  }

  // Custom filters
  async findByBoolean(flag: boolean) {
    return this.repo.find({ where: { field_3: flag } });
  }

  async findByRange(min: number, max: number) {
    return this.repo.find({
      where: { field_2: Between(min, max) },
    });
  }
}
