import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';

@Module({
    imports: [
        HttpModule
    ],
  controllers: [RegistrationController],
    providers: [RegistrationService]
})
export class RegistrationModule { }
