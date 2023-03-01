import { Body, Controller, HttpException, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { VerifyOtpRequestDto } from '../registration-aadhaar/dtos/verifyOtpRequest.dto';
import { LoginAbhaIdGenerateOtpRequestDto } from './dtos/loginAbhaIdGenerateOtpRequest.dto';
import { LoginAbhaNumberGenerateOtpRequestDto } from './dtos/loginAbhaNumberGenerateOtpRequest.dto';
import { LoginMobileConfirmRequestDto } from './dtos/loginMobileConfirmRequest.dto';
import { LoginMobileConfirmResponseDto } from './dtos/loginMobileConfirmResponse.dto';
import { LoginMobileGenerateOtpRequestDto } from './dtos/loginMobileGenerateOtpRequest.dto';
import { LoginMobileGenerateOtpResponseDto } from './dtos/loginMobileGenerateOtpResponse.dto';
import { LoginMobileVerifyOtpResponseDto } from './dtos/loginMobileVerifyOtpResponse.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService){}

    @Post('/mobile/generateOtp')
    @ApiOperation({summary: 'Send OTP to given mobile number', tags:['Login']})
    @ApiResponse({status: 201, description: 'OK', type: LoginMobileGenerateOtpResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 422, description: 'Couldn\'t generate OTP'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async generateMobileOtp(@Body(new ValidationPipe()) body : LoginMobileGenerateOtpRequestDto) {
        const res = await this.loginService.loginMobileGenerateOtp(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Enter correct phone number", HttpStatus.BAD_REQUEST);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('Couldn\'t generate OTP', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/mobile/verifyOtp')
    @ApiOperation({summary: 'Verify OTP given to mobile number', tags:['Login']})
    @ApiResponse({status: 201, description: 'OK', type: LoginMobileVerifyOtpResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 422, description: 'OTP wrong/expired'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async verifyMobileOtp(@Body(new ValidationPipe()) body : VerifyOtpRequestDto) {
        const res = await this.loginService.loginMobileVerifyOtp(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('OTP wrong/expired', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/mobile/confirm')
    @ApiOperation({summary: 'Confirm login', tags:['Login']})
    @ApiResponse({status: 201, description: 'OK', type: LoginMobileConfirmResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 422, description: 'Invalid details'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async confirm(@Body(new ValidationPipe()) body : LoginMobileConfirmRequestDto) {
        const res = await this.loginService.loginMobileConfirm(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('Invalid details', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/healthId/generateOtp')
    @ApiOperation({summary: 'Send OTP to mobile number associated with given healthId', tags:['Login']})
    @ApiResponse({status: 201, description: 'OK', type: LoginMobileGenerateOtpResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Enter valid ABHA ID'})
    @ApiResponse({status: 422, description: 'Couldn\'t generate OTP'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async generateAbhaIdOtp(@Body(new ValidationPipe()) body : LoginAbhaIdGenerateOtpRequestDto) {
        const res = await this.loginService.loginAbhaIdGenerateOtp(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Enter correct ABHA ID", HttpStatus.BAD_REQUEST);
                case 404: throw new HttpException("Enter valid ABHA ID", HttpStatus.NOT_FOUND);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('Couldn\'t generate OTP', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/healthId/verifyOtp')
    @ApiOperation({summary: 'Verify OTP given to mobile number associated with healthId', tags:['Login']})
    @ApiResponse({status: 201, description: 'OK', type: LoginMobileConfirmResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 422, description: 'OTP wrong/expired'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async verifyAbhaIdOtp(@Body(new ValidationPipe()) body : VerifyOtpRequestDto) {
        const res = await this.loginService.loginAbhaIdVerifyOtp(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('OTP wrong/expired', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/healthNumber/generateOtp')
    @ApiOperation({summary: 'Send OTP to mobile number associated with given healthId', tags:['Login']})
    @ApiResponse({status: 201, description: 'OK', type: LoginMobileGenerateOtpResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Enter valid Aadhaar number'})
    @ApiResponse({status: 422, description: 'Couldn\'t generate OTP'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async generateAbhaNumberOtp(@Body(new ValidationPipe()) body : LoginAbhaNumberGenerateOtpRequestDto) {
        const res = await this.loginService.loginAbhaNumberGenerateOtp(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Enter correct ABHA ID", HttpStatus.BAD_REQUEST);
                case 404: throw new HttpException("Enter valid ABHA Number", HttpStatus.NOT_FOUND);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('Couldn\'t generate OTP', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('/healthNumber/verifyOtp')
    @ApiOperation({summary: 'Verify OTP given to mobile number associated with healthId', tags:['Login']})
    @ApiResponse({status: 201, description: 'OK', type: LoginMobileConfirmResponseDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 422, description: 'OTP wrong/expired'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async verifyAbhaNumberOtp(@Body(new ValidationPipe()) body : VerifyOtpRequestDto) {
        const res = await this.loginService.loginAbhaNumberVerifyOtp(body);
        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED);
                case 422: throw new HttpException('OTP wrong/expired', HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }
}
