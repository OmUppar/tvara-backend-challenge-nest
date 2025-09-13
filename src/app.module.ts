import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterviewTest } from './interview-tests/entities/interview-test.entity';
import { InterviewTestsModule } from './interview-tests/interview-tests.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'postgres',
      entities: [InterviewTest],
      synchronize: true, // ⚠️ only in dev
    }),
    InterviewTestsModule,
  ],
})
export class AppModule {}
