import { Test, TestingModule } from '@nestjs/testing';
import { InterviewTestsService } from './interview-tests.service';

describe('InterviewTestsService', () => {
  let service: InterviewTestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterviewTestsService],
    }).compile();

    service = module.get<InterviewTestsService>(InterviewTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
