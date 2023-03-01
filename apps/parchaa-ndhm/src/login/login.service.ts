import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { LoginAbhaIdGenerateOtpRequestDto } from './dtos/loginAbhaIdGenerateOtpRequest.dto';
import { LoginAbhaNumberGenerateOtpRequestDto } from './dtos/loginAbhaNumberGenerateOtpRequest.dto';
import { LoginMobileConfirmRequestDto } from './dtos/loginMobileConfirmRequest.dto';
import { LoginMobileGenerateOtpRequestDto } from './dtos/loginMobileGenerateOtpRequest.dto';
import { LoginMobileVerifyOtpRequestDto } from './dtos/loginMobileVerifyOtpRequest.dto';

@Injectable()
export class LoginService {

    constructor(@Inject('ABHA-SERVICES') private readonly abhaClient: ClientProxy) {}

    async loginMobileGenerateOtp(body: LoginMobileGenerateOtpRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('loginMobileGenerateOtp', body));
        console.log(response);
        return response;
    }

    async loginMobileVerifyOtp(body: LoginMobileVerifyOtpRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('loginMobileVerifyOtp',body));
        console.log(response);
        return response;
    }

    async loginMobileConfirm(body: LoginMobileConfirmRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('loginMobileConfirm',body));
        console.log(response);
        return response;
    }

    async loginAbhaIdGenerateOtp(body: LoginAbhaIdGenerateOtpRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('loginAbhaIdGenerateOtp', body));
        console.log(response);
        return response;
    }

    async loginAbhaIdVerifyOtp(body: LoginMobileVerifyOtpRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('loginAbhaIdVerifyOtp', body));
        console.log(response);
        return response;
    }

    async loginAbhaNumberGenerateOtp(body: LoginAbhaNumberGenerateOtpRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('loginAbhaNumberGenerateOtp', body));
        console.log(response);
        return response;
    }

    async loginAbhaNumberVerifyOtp(body: LoginMobileVerifyOtpRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('loginAbhaNumberVerifyOtp', body));
        console.log(response);
        return response;
    }

}
