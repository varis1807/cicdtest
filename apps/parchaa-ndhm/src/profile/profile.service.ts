import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { FindProviderByIdRequestDto } from './dtos/findProviderByIdRequest.dto';
import { ProfileShareRequestDto } from './dtos/profileShareRequest.dto';

@Injectable()
export class ProfileService {

    constructor(@Inject('ABHA-SERVICES') private readonly abhaClient: ClientProxy) {}

    async getProfile(token: string) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('profile', token));
        console.log(response);
        return response;
    }

    async getQrCode(token: string) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('qrCode', token));
        console.log(response);
        return response;
    }

    async refreshToken(refreshToken: string) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('refreshToken', refreshToken));
        console.log(response);
        return response;
    }

    async findProviderById(body: FindProviderByIdRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('findProviderById', body));
        console.log(response);
        return response;
    }

    async profileShare(body: ProfileShareRequestDto) : Promise<Object> {
        const response = await lastValueFrom(this.abhaClient.send('profileShare', body));
        console.log(response);
        return response;
    }

}
