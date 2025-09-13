import { PartialType } from '@nestjs/mapped-types';
import { CreateInterviewTestDto } from './create-interview-test.dto';

export class UpdateInterviewTestDto extends PartialType(
  CreateInterviewTestDto,
) {}
