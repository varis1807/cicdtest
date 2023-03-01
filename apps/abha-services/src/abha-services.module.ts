import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AbhaServicesController } from './abha-services.controller';
import { AbhaServicesService } from './abha-services.service';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    RegistrationModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  controllers: [AbhaServicesController],
  providers: [AbhaServicesService],
})
export class AbhaServicesModule {}
