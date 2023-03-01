import { Body, Controller, HttpException, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GenerateOtpMobileRequestDto } from './dtos/generateOtpMobileRequest.dto';
import { GenerateOtpMobileResponseDto } from './dtos/generateOtpMobileResponse.dto';
import { VerifyOtpMobileRequestDto } from './dtos/verifyOtpMobileRequest.dto';
import { VerifyOtpMobileResponseDto } from './dtos/verifyOtpMobileResponse.dto';
import { CreateHealthIdRequestDto } from './dtos/createHealthIdRequest.dto';
import { CreateHealthIdResponseDto } from './dtos/createHealthIdResponse.dto';
import { RegistrationMobileService } from './registration-mobile.service';
import { ExistByHealthIdRequestDto } from './dtos/existByHealthIdRequest.dto';
import { ExistByHealthIdResponseDto } from './dtos/existByHealthIdResponse.dto';

@Controller('registration/mobile')
export class RegistrationMobileController {

    constructor(private readonly registrationMobileService: RegistrationMobileService){}

    @Post('generateOtp')
    @ApiOperation({summary: 'Send OTP to given mobile number', tags:['Registration through mobile']})
    @ApiResponse({status: 201, description: 'OK', type: GenerateOtpMobileResponseDto})
    @ApiResponse({status: 422, description: 'Couldn\'t generate OTP'})
    @ApiResponse({status: 400, description: 'Enter correct phone number'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async generateOtp(@Body(new ValidationPipe()) body : GenerateOtpMobileRequestDto) {
        
        const res = await this.registrationMobileService.generateOtp(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Enter correct phone number", HttpStatus.BAD_REQUEST);
                case 422: throw new HttpException( "Couldn\'t generate OTP", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('verifyOtp')
    @ApiOperation({summary: 'Verify OTP sent to mobile number (Please ensure OTP is of 6 digits)', tags:['Registration through mobile']})
    @ApiResponse({status: 201, description: 'OK', type: VerifyOtpMobileResponseDto})
    @ApiResponse({status: 422, description: 'OTP entered is incorrect'})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async verifyOtp(@Body(new ValidationPipe()) body : VerifyOtpMobileRequestDto) : Promise<Object> {

        const res =  await this.registrationMobileService.verifyOtp(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 422: throw new HttpException( "OTP entered is incorrect", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('createHealthId')
    @ApiOperation({summary: 'Creates healthId', tags:['Registration through mobile']})
    @ApiResponse({status: 201, description: 'OK', type: CreateHealthIdResponseDto})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async createHealthId(@Body(new ValidationPipe()) body : CreateHealthIdRequestDto) : Promise<Object> {
        
        const res =  await this.registrationMobileService.createHealthId(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('existByHealthId')
    @ApiOperation({summary: 'Creates healthId', tags:['Registration through mobile']})
    @ApiResponse({status: 201, description: 'OK', type: ExistByHealthIdResponseDto})
    @ApiResponse({status: 404, description: 'Unknown error occured'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 422, description: 'No Details Found for Given ABHA number Including permanently deleted HIDs'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async existByHealthId(@Body(new ValidationPipe) body : ExistByHealthIdRequestDto) : Promise<Object> {
        const res =  await this.registrationMobileService.existByHealthId(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 422: throw new HttpException( "No Details Found for Given ABHA number Including permanently deleted HIDs", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }
}
