import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { AppModule } from './app.module.js';
import { loadConfig } from './config/app.config.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // ConfigModule has loaded .env by now; this re-validates and returns typed values.
  const config = loadConfig();

  app.useBodyParser('json', { limit: '16kb' });
  app.useBodyParser('urlencoded', { limit: '16kb', extended: false });

  app.use(helmet());
  app.enableCors({
    origin: config.corsOrigins,
    methods: ['GET', 'POST'],
    maxAge: 600,
  });

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableShutdownHooks();

  await app.listen(config.port);
  new Logger('Bootstrap').log(
    `API listening on port ${String(config.port)} (${config.nodeEnv})`,
  );
}

await bootstrap();