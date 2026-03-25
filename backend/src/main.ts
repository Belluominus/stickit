import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((err) => {
  const logger = new Logger('Bootstrap');
  logger.error('Application startup failure', err);
  process.exit(1);
});
