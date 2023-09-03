import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import 'dotenv/config';
import * as cookie from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.static(process.cwd() + '/uploads/'));
  app.setGlobalPrefix('sello');
  app.use(cookie());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const PORT = process.env.PORT;
  await app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}
bootstrap();
