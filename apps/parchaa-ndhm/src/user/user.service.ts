import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateUserRequestDto } from './dtos/createUserRequest.dto';
import { UpdateUserRequestDto } from './dtos/updateUserRequest.dto';

@Injectable()
export class UserService {

    constructor(@Inject('USER-SERVICES') private readonly userClient: ClientProxy) {}

    async createUser(body: CreateUserRequestDto) {
        const response = lastValueFrom(this.userClient.send('createUser', body));
        console.log(response);
        return response;
    }

    async updateUser(body: UpdateUserRequestDto) {
        const response = lastValueFrom(this.userClient.send('updateUser', body));
        console.log(response);
        return response;
    }

    async findByMobile(mobile: string) {
        const response = lastValueFrom(this.userClient.send('findByMobile', mobile));
        console.log(response);
        return response;
    }

    async findById(id: number) {
        const response = lastValueFrom(this.userClient.send('findById', id));
        console.log(response);
        return response;
    }

    async deleteUser(id: number) {
        const response = lastValueFrom(this.userClient.send('deleteUser', id));
        console.log(response);
        return response;
    }

    async findAll() {
        const response = lastValueFrom(this.userClient.send('findAll', {}));
        console.log(response);
        return response;
    }

}
