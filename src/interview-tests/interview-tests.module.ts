import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterviewTest } from './entities/interview-test.entity';
import { InterviewTestsService } from './interview-tests.service';
import { InterviewTestsController } from './interview-tests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InterviewTest])], // 👈 this is required
  controllers: [InterviewTestsController],
  providers: [InterviewTestsService],
  exports: [TypeOrmModule], // optional, only if other modules need it
})
export class InterviewTestsModule {}
