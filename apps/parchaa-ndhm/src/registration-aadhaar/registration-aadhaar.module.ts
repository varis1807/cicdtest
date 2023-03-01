import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RegistrationAadhaarController } from './registration-aadhaar.controller';
import { RegistrationAadhaarService } from './registration-aadhaar.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ABHA-SERVICES',
        transport: Transport.TCP,
        options: {
          // host:'abha-services',
          port: 8081
        }
      }
    ])
  ],
  controllers: [RegistrationAadhaarController],
  providers: [RegistrationAadhaarService]
})
export class RegistrationAadhaarModule {}
