/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ClassSerializerInterceptor, Logger, ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app/app.module";
import { PrismaClientExceptionFilter } from "./filters/prisma-client-exceptions.filter";

async function bootstrap() {
  const port = process.env.PORT || 3333;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle("Patronage Web Server").setDescription("API description").setVersion("1.0").build();
  const globalPrefix = "api";
  const document = SwaggerModule.createDocument(app, config);

  const { httpAdapter } = app.get(HttpAdapterHost);
  SwaggerModule.setup("api", app, document);

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(port);
  Logger.log(`🚀 Server is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
