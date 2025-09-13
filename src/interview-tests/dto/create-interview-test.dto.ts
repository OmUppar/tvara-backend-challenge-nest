import { Type } from 'class-transformer';
import { IsObject, IsNumber, IsBoolean } from 'class-validator';

export class CreateInterviewTestDto {
  @IsObject()
  field_1: Record<string, any>; // <-- allows JSON object directly

  @IsNumber()
  @Type(() => Number)
  field_2: number;

  @IsBoolean()
  @Type(() => Boolean)
  field_3: boolean;
}
