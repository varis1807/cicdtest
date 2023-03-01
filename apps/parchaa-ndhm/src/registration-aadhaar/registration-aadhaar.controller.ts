import { Body, Controller, HttpException, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GenerateOtpRequestDto } from './dtos/generateOtpRequest.dto';
import { GenerateOtpResponseDto } from './dtos/generateOtpResponse.dto';
import { VerifyOtpRequestDto } from './dtos/verifyOtpRequest.dto';
import { VerifyOtpResponseDto } from './dtos/verifyOtpResponse.dto';
import { GenerateMobileOtpRequestDto } from './dtos/generateMobileOtpRequest.dto';
import { GenerateMobileOtpResponseDto } from './dtos/generateMobileOtpResponse.dto';
import { CreateHealthIdPreVerifiedRequestDto } from './dtos/createHealthIdPreVerifiedRequest.dto';
import { CreateHealthIdPreVerifiedResponseDto } from './dtos/createHealthIdPreVerifiedResponse.dto';
import { RegistrationAadhaarService } from './registration-aadhaar.service';

@Controller('registration/aadhaar')
export class RegistrationAadhaarController {

    constructor(private readonly registrationAadhaarService: RegistrationAadhaarService){};

    @Post('generateOtp')
    @ApiOperation({summary: 'Send OTP to given aadhaar', tags:['Registration through aadhaar']})
    @ApiResponse({status: 201, description: 'OK', type: GenerateOtpResponseDto})
    @ApiResponse({status: 422, description: 'Couldn\'t find registered mobile number to the given aadhaar'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async generateOtp(@Body(new ValidationPipe()) body : GenerateOtpRequestDto) : Promise<Object> {
        const res = await this.registrationAadhaarService.generateOtp(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 422: throw new HttpException( "Couldn\'t find registered mobile number to the given aadhaar", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('verifyOtp')
    @ApiOperation({summary: 'Verify OTP sent to aadhaar', tags:['Registration through aadhaar']})
    @ApiResponse({status: 201, description: 'OK', type: VerifyOtpResponseDto})
    @ApiResponse({status: 422, description: 'OTP entered is incorrect'})
    @ApiResponse({status: 400, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async verifyOtp(@Body(new ValidationPipe()) body : VerifyOtpRequestDto) : Promise<Object> {
        const res = await this.registrationAadhaarService.verifyOtp(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 422: throw new HttpException( "OTP entered is incorrect", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('generateMobileOtp')
    @ApiOperation({summary: 'Send OTP to given mobile number', tags:['Registration through aadhaar']})
    @ApiResponse({status: 201, description: 'OK', type: GenerateMobileOtpResponseDto})
    @ApiResponse({status: 422, description: 'Mobile number may not register'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async generateMobileOtp(@Body(new ValidationPipe()) body : GenerateMobileOtpRequestDto) : Promise<Object> {
        const res = await this.registrationAadhaarService.generateMobileOtp(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 422: throw new HttpException( "Mobile number may not register", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('verifyMobileOtp')
    @ApiOperation({summary: 'Verify OTP sent to mobile number', tags:['Registration through aadhaar']})
    @ApiResponse({status: 201, description: 'OK', type: VerifyOtpResponseDto})
    @ApiResponse({status: 422, description: 'OTP entered is incorrect'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async verifyMobileOtp(@Body(new ValidationPipe()) body : VerifyOtpRequestDto) : Promise<Object> {
        const res = await this.registrationAadhaarService.verifyMobileOtp(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 422: throw new HttpException( "OTP entered is incorrect", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

    @Post('createHealthId')
    @ApiOperation({summary: 'Verify OTP sent to mobile number', tags:['Registration through aadhaar']})
    @ApiResponse({status: 201, description: 'OK', type: CreateHealthIdPreVerifiedResponseDto})
    @ApiResponse({status: 422, description: 'Could not find Account for given Aadhaar/Mobile'})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 404, description: 'Not found'})
    @ApiResponse({status: 421, description: 'Error connecting to NDHM server.'})
    @ApiResponse({status: 500, description: 'Internal server error'})
    async createHealthId(@Body(new ValidationPipe()) body : CreateHealthIdPreVerifiedRequestDto) : Promise<Object> {
        const res = await this.registrationAadhaarService.createHealthIdPreverified(body);

        if(res["error"]){
            switch(res["error"]["status"]){
                case 400: throw new HttpException( "Bad request", HttpStatus.BAD_REQUEST);
                case 422: throw new HttpException( "Couldn't find account for given Aadhaar/Mobile", HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new HttpException('Error connecting to NDHM server', HttpStatus.MISDIRECTED)
                default: throw new HttpException("Unknown error occured", HttpStatus.NOT_FOUND)
            }
        } else {
            return res;
        }
    }

}
