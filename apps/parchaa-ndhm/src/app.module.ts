import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationMobileModule } from './registration-mobile/registration-mobile.module';
import { RegistrationAadhaarModule } from './registration-aadhaar/registration-aadhaar.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RegistrationMobileModule, 
    RegistrationAadhaarModule, 
    ThrottlerModule.forRoot({ ttl: 5, limit: 3 }),
    ConfigModule.forRoot({isGlobal: true}),
    LoginModule,
    ProfileModule,
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
})
export class AppModule { }
