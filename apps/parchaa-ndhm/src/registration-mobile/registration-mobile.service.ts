import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateHealthIdRequestDto } from './dtos/createHealthIdRequest.dto';
import { ExistByHealthIdRequestDto } from './dtos/existByHealthIdRequest.dto';
import { GenerateOtpMobileRequestDto } from './dtos/generateOtpMobileRequest.dto';
import { VerifyOtpMobileRequestDto } from './dtos/verifyOtpMobileRequest.dto';

@Injectable()
export class RegistrationMobileService {

    constructor(@Inject('ABHA-SERVICES') private readonly abhaClient: ClientProxy) {}

    async generateOtp(body: GenerateOtpMobileRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('generateMobileOtp', body));
        console.log(response);
        return response;
    }

    async verifyOtp(body: VerifyOtpMobileRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('verifyMobileOtp', body));
        console.log(response);
        return response;
    }

    async createHealthId(body: CreateHealthIdRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('createHealthId', body));
        console.log(response);
        return response;
    }

    async existByHealthId(body: ExistByHealthIdRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('existByHealthId', body));
        console.log(response);
        return response;
    }
}
