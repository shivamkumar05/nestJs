import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';

function globleMiddlewareOne (req: Request , res : Response, next : NextFunction) {
  console.log("GlobleMiddleWare one");
  next();
}

function globleMiddlewareTwo (req: Request , res : Response, next : NextFunction) {
  console.log("GlobleMiddleWare Two");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globleMiddlewareOne,globleMiddlewareTwo);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
