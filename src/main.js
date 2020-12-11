import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.startAllMicroservicesAsync();

  app.enableCors();

  app.setGlobalPrefix(process.env.SERVICE_PREFIX || 'api/v1');

  app.use(
    bodyParser.json({
      type: 'application/vnd.api+json',
    }),
  );

  await app.listen(process.env.SERVICE_PORT || 3000);
}

bootstrap();
