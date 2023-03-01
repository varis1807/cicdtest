import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateHealthIdPreVerifiedRequestDto } from './dtos/createHealthIdPreVerifiedRequest.dto';
import { GenerateMobileOtpRequestDto } from './dtos/generateMobileOtpRequest.dto';
import { GenerateOtpRequestDto } from './dtos/generateOtpRequest.dto';
import { VerifyOtpRequestDto } from './dtos/verifyOtpRequest.dto';

@Injectable()
export class RegistrationAadhaarService {

    constructor(@Inject('ABHA-SERVICES') private readonly abhaClient: ClientProxy) {}

    async generateOtp(body: GenerateOtpRequestDto) : Promise<Object> {
        const response = lastValueFrom(this.abhaClient.send('generateAadhaarOtp', body));
        console.log(response);
        return response;
    }

    async verifyOtp(body: VerifyOtpRequestDto) : Promise<Object> {
        const response = lastValueFrom(this.abhaClient.send('verifyAadhaarOtp', body));
        console.log(response);
        return response;
    }

    async generateMobileOtp(body: GenerateMobileOtpRequestDto) : Promise<Object> {
        const response = lastValueFrom(this.abhaClient.send('generateAadhaarMobileOtp', body));
        console.log(response);
        return response;
    }

    async verifyMobileOtp(body: VerifyOtpRequestDto) : Promise<Object> {
        const response = lastValueFrom(this.abhaClient.send('verifyAadhaarMobileOtp', body));
        console.log(response);
        return response;
    }

    async createHealthIdPreverified(body: CreateHealthIdPreVerifiedRequestDto) : Promise<Object> {
        const response = lastValueFrom(this.abhaClient.send('createHealthIdPreverified', body));
        console.log(response);
        return response;
    }
}
