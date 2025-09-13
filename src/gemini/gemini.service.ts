import { Injectable, BadGatewayException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GeminiService {
  private apiUrl = process.env.GEMINI_API_URL;
  private apiKey = process.env.GEMINI_API_KEY;

  async askGemini(prompt: string) {
    if (!this.apiUrl || !this.apiKey) {
      throw new BadGatewayException('Gemini API configuration missing');
    }

    try {
      // ✅ Correct payload format as per Gemini docs
      const body = {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      };

      const resp = await axios.post(`${this.apiUrl}?key=${this.apiKey}`, body, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 60_000,
      });

      const data = resp.data || {};

      // ✅ Extract the generated response text
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        JSON.stringify(data);

      return {
        ok: true,
        loading: false,
        response: text,
        raw: data, // optional, remove in prod
      };
    } catch (err: any) {
      const message =
        err?.response?.data || err?.message || 'Gemini request failed';
      throw new BadGatewayException({
        ok: false,
        loading: false,
        error: message,
      });
    }
  }
}
