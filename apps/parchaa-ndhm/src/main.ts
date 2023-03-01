import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Parchaa-NDHM')
    .setDescription('All the APIs required by Parchaa clients')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(1506);
  console.log("parchaa-ndhm-started");
}
bootstrap();
