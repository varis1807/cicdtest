import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserRequestDto } from 'apps/parchaa-ndhm/src/user/dtos/createUserRequest.dto';
import { UpdateUserRequestDto } from 'apps/parchaa-ndhm/src/user/dtos/updateUserRequest.dto';
import { UserServicesService } from './user-services.service';

@Controller()
export class UserServicesController {
  constructor(private readonly userServicesService: UserServicesService) {}

  @MessagePattern('createUser')
  async createUser(body: CreateUserRequestDto) {
    return this.userServicesService.createUser(body);
  }

  @MessagePattern('findByMobile')
  async findByMobile(mobile: string) {
    return this.userServicesService.findByMobile(mobile);
  }

  @MessagePattern('findById')
  async findById(id: number) {
    return this.userServicesService.findById(id);
  }

  @MessagePattern('findAll')
  async findAll() {
    return this.userServicesService.findAllUsers();
  }

  @MessagePattern('updateUser')
  async updateUser(body: UpdateUserRequestDto) {
    return this.userServicesService.updateUser(body);
  }

  @MessagePattern('deleteUser')
  async deleteUser(id: number) {
    return this.userServicesService.deleteUser(id);
  }
}
