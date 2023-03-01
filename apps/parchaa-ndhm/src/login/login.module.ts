import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

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
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
