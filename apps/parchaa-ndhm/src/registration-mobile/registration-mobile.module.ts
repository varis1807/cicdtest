import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RegistrationMobileController } from './registration-mobile.controller';
import { RegistrationMobileService } from './registration-mobile.service';

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
  controllers: [RegistrationMobileController],
  providers: [RegistrationMobileService]
})
export class RegistrationMobileModule {}
