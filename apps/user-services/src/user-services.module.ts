import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserServicesController } from './user-services.controller';
import { UserServicesService } from './user-services.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ".env",
          // envFilePath: ".prod.env", //Uncomment this file and add .prod.env file for prod
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        // entities: [__dirname + '/**/*.entity{.ts,.js}'],
        entities: [ User ]
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
    HttpModule.register({
      timeout: 6000,
      maxRedirects: 5,
    })
  ],
  controllers: [UserServicesController],
  providers: [UserServicesService],
})
export class UserServicesModule {}
