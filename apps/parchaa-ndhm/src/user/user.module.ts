import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER-SERVICES',
        transport: Transport.TCP,
        options: {
          // host:'user-services',
          port: 8082
        }
      }
    ])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
