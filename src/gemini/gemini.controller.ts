import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { CreateGeminiDto } from './dto/create-gemini.dto';
import { UpdateGeminiDto } from './dto/update-gemini.dto';

@Controller('ask-gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}
  @Post()
  async ask(@Body('prompt') prompt: string) {
    if (!prompt || !prompt.trim()) {
      throw new BadRequestException({
        ok: false,
        message: 'Prompt is required',
      });
    }

    // NOTE on loading: the frontend should show a loading state while awaiting this request.
    // The server will return a final payload with loading: false.
    const result = await this.geminiService.askGemini(prompt);
    return result;
  }

  // @Get()
  // findAll() {
  //   return this.geminiService.findAll();
  // }
}
