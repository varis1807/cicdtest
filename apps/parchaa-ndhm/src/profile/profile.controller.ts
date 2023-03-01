import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { FindProviderByIdRequestDto } from './dtos/findProviderByIdRequest.dto';
import { FindProviderByIdResponseDto } from './dtos/findProviderByIdResponse.dto';
import { ProfileShareRequestDto } from './dtos/profileShareRequest.dto';
import { ProfileShareResponseDto } from './dtos/profileShareResponse.dto';
import { ProfileService } from './profile.service';

export class tokenParams {
    @IsString()
    token: string
}
export class refreshTokenParams {
    @IsString()
    refreshToken: string
}

@Controller('profile')
export class ProfileController {

    constructor(private readonly profileService: ProfileService) {}

    @Get(':token')
    @ApiOperation({summary: 'Get profile details', tags:['Profile']})
    @ApiParam({name: 'token', required: true, schema: {type: 'string'}})
    @ApiResponse({status: 200, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 422, description: 'Invalid Request data'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async getProfile(@Param(new ValidationPipe()) params: tokenParams) {
        const res = await this.profileService.getProfile(params.token);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 401: throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
                case 422: throw new HttpException('Invalid Request data', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Get('qrCode/:token')
    @ApiOperation({summary: 'Get QR code for profile details (Image sent is a base64 encoded string)', tags:['Profile']})
    @ApiParam({name: 'token', required: true, schema: {type: 'string'}})
    @ApiResponse({status: 200, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 422, description: 'Invalid Request data'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async getQrCode(@Param(new ValidationPipe()) params: tokenParams) {
        const res = await this.profileService.getQrCode(params.token);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 401: throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('Invalid Request data', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Get('refreshToken/:refreshToken')
    @ApiOperation({summary: 'Refresh token for user', tags:['Profile']})
    @ApiParam({name: 'refreshToken', required: true, schema: {type: 'string'}})
    @ApiResponse({status: 200, description: 'OK'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 422, description: 'Invalid Request data'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async refreshToken(@Param(new ValidationPipe()) params: refreshTokenParams) {
        const res = await this.profileService.refreshToken(params.refreshToken);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 401: throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('Invalid Request data', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/findProviderById')
    @ApiOperation({summary: 'Find Provider by HIP ID', tags:['Profile']})
    @ApiResponse({status: 201, description: 'OK', type: FindProviderByIdResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async findProviderById(@Body(new ValidationPipe()) body : FindProviderByIdRequestDto) {
        const res = await this.profileService.findProviderById(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/profileShare')
    @ApiOperation({summary: 'Share Patient profile to HIP ID', tags:['Profile']})
    @ApiResponse({status: 201, description: 'OK', type: ProfileShareResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 504, description: 'Gateway timeout. Try again'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async profileShare(@Body(new ValidationPipe()) body : ProfileShareRequestDto) {
        const res = await this.profileService.profileShare(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 504: throw new HttpException( "Gateway timeout. Try again", HttpStatus.GATEWAY_TIMEOUT);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

}
