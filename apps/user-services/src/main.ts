import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserServicesModule } from './user-services.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserServicesModule,
    {
      transport: Transport.TCP,
      options: {
        // host:'user-services',
        port: 8082,
        retryAttempts: 3,
        retryDelay: 1000
      }
    }
  )
  await app.listen()
  console.log('user-services started')
}
bootstrap();
