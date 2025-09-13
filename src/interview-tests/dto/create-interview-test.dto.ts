import {
  IsOptional,
  IsString,
  IsJSON,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateInterviewTestDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsJSON()
  field_1?: string;

  @IsOptional()
  @IsNumber()
  field_2?: number;

  @IsOptional()
  @IsBoolean()
  field_3?: boolean;
}
