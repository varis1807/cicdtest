import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserRequestDto } from './dtos/createUserRequest.dto';
import { FindByIdRequestDto } from './dtos/findByIdRequest.dto';
import { FindByMobileRequestDto } from './dtos/findByMobileRequest.dto';
import { UpdateUserRequestDto } from './dtos/updateUserRequest.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    @ApiOperation({summary: 'Create user in Parchaa database', tags: ['User']})
    @ApiResponse({status: 201, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async createUser(@Body(new ValidationPipe()) body: CreateUserRequestDto) {
        const res = await this.userService.createUser(body);

        console.log(res);

        return res;
    }

    @Post('update')
    @ApiOperation({summary: 'Update user in Parchaa database', tags: ['User']})
    @ApiResponse({status: 201, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async updateUser(@Body(new ValidationPipe()) body: UpdateUserRequestDto) {
        const res = await this.userService.updateUser(body);

        console.log(res);

        return res;
    }

    @Post('findByMobile')
    @ApiOperation({summary: 'Find user by mobile in Parchaa database', tags: ['User']})
    @ApiResponse({status: 201, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async findByMobile(@Body(new ValidationPipe()) body: FindByMobileRequestDto) {
        const res = await this.userService.findByMobile(body.mobile);

        console.log(res);

        if(res){
            return res;
        } else {
            return {};
        }

    }

    @Post('findById')
    @ApiOperation({summary: 'Find user by ID in Parchaa database', tags: ['User']})
    @ApiResponse({status: 201, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async findById(@Body(new ValidationPipe()) body: FindByIdRequestDto) {
        const res = await this.userService.findById(body.id);

        console.log(res);

        if(res){
            return res;
        } else {
            return {};
        }
    }

    @Post('delete')
    @ApiOperation({summary: 'Delete user by ID in Parchaa database', tags: ['User']})
    @ApiResponse({status: 201, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async deleteUser(@Body(new ValidationPipe()) body: FindByIdRequestDto) {
        const res = await this.userService.deleteUser(body.id);

        console.log(res);

        if(res){
            return res;
        } else {
            return {};
        }
    }

    @Get('findAll')
    @ApiOperation({summary: 'Find all users in Parchaa database', tags: ['User']})
    @ApiResponse({status: 201, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async findAll() {
        const res = await this.userService.findAll();

        console.log(res);

        if(res){
            return res;
        } else {
            return {};
        }
    }
}
