import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AbhaServicesModule } from './abha-services.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AbhaServicesModule,
    {
      transport: Transport.TCP,
      options: {
        // host:'abha-services',
        port: 8081,
        retryAttempts: 3,
        retryDelay: 1000
      }
    }
  )
  await app.listen()
  console.log('abha-services started')
}
bootstrap();
