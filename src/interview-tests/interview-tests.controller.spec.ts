import { Test, TestingModule } from '@nestjs/testing';
import { InterviewTestsController } from './interview-tests.controller';
import { InterviewTestsService } from './interview-tests.service';

describe('InterviewTestsController', () => {
  let controller: InterviewTestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterviewTestsController],
      providers: [InterviewTestsService],
    }).compile();

    controller = module.get<InterviewTestsController>(InterviewTestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
