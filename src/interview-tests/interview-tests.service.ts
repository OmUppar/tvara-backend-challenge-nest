import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterviewTest } from './entities/interview-test.entity';
import { CreateInterviewTestDto } from './dto/create-interview-test.dto';

@Injectable()
export class InterviewTestsService {
  constructor(
    @InjectRepository(InterviewTest)
    private repo: Repository<InterviewTest>,
  ) {}

  async create(dto: CreateInterviewTestDto) {
    // parse JSON string to object before saving
    const entity = this.repo.create({
      ...dto,
      field_1: dto.field_1 ? JSON.parse(dto.field_1) : null,
    });
    return this.repo.save(entity);
  }
}
