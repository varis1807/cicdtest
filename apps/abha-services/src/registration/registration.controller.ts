import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoginAbhaIdGenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginAbhaIdGenerateOtpRequest.dto';
import { LoginAbhaNumberGenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginAbhaNumberGenerateOtpRequest.dto';
import { LoginMobileConfirmRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginMobileConfirmRequest.dto';
import { LoginMobileGenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginMobileGenerateOtpRequest.dto';
import { LoginMobileVerifyOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginMobileVerifyOtpRequest.dto';
import { FindProviderByIdRequestDto } from 'apps/parchaa-ndhm/src/profile/dtos/findProviderByIdRequest.dto';
import { ProfileShareRequestDto } from 'apps/parchaa-ndhm/src/profile/dtos/profileShareRequest.dto';
import { CreateHealthIdPreVerifiedRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/createHealthIdPreVerifiedRequest.dto';
import { GenerateMobileOtpRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/generateMobileOtpRequest.dto';
import { GenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/generateOtpRequest.dto';
import { VerifyOtpRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/verifyOtpRequest.dto';
import { CreateHealthIdRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/createHealthIdRequest.dto';
import { ExistByHealthIdRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/existByHealthIdRequest.dto';
import { GenerateOtpMobileRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/generateOtpMobileRequest.dto';
import { VerifyOtpMobileRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/verifyOtpMobileRequest.dto';
import { RegistrationService } from './registration.service';

@Controller()
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) { }

    @MessagePattern('generateMobileOtp')
    async generateMobileOtp(body: GenerateOtpMobileRequestDto) {
        return this.registrationService.generateMobileOtp(body);
    }

    @MessagePattern('verifyMobileOtp')
    async verifyMobileOtp(body: VerifyOtpMobileRequestDto) {
        return this.registrationService.verifyMobileOtp(body);
    }

    @MessagePattern('createHealthId')
    async createHealthId(body: CreateHealthIdRequestDto) {
        return this.registrationService.createHealthId(body);
    }

    @MessagePattern('generateAadhaarOtp')
    async generateAadhaarOtp(body: GenerateOtpRequestDto) {
        return this.registrationService.generateAadhaarOtp(body);
    }

    @MessagePattern('verifyAadhaarOtp')
    async verifyAaadhaarOtp(body: VerifyOtpRequestDto) {
        return this.registrationService.verifyAadhaarOtp(body);
    }

    @MessagePattern('generateAadhaarMobileOtp')
    async generateAadhaarMobileOtp(body: GenerateMobileOtpRequestDto) {
        return this.registrationService.generateAadhaarMobileOtp(body);
    }

    @MessagePattern('verifyAadhaarMobileOtp')
    async verifyAaadhaarMobileOtp(body: VerifyOtpRequestDto) {
        return this.registrationService.verifyAadhaarMobileOtp(body);
    }

    @MessagePattern('createHealthIdPreverified')
    async createHealthIdPreverified(body: CreateHealthIdPreVerifiedRequestDto) {
        return this.registrationService.createHealthIdPreverified(body);
    }

    @MessagePattern('existByHealthId')
    async existByHealthId(body: ExistByHealthIdRequestDto) {
        return this.registrationService.existsByHealthId(body);
    }

    

    @MessagePattern('loginMobileGenerateOtp')
    async loginMobileGenerateOtp(body: LoginMobileGenerateOtpRequestDto) {
        return this.registrationService.loginMobileGenerateOtp(body);
    }

    @MessagePattern('loginMobileVerifyOtp')
    async loginMobileVerifyOtp(body: LoginMobileVerifyOtpRequestDto) {
        return this.registrationService.loginMobileVerifyOtp(body);
    }

    @MessagePattern('loginMobileConfirm')
    async loginMobileConfirm(body: LoginMobileConfirmRequestDto) {
        return this.registrationService.loginMobileConfirm(body);
    }

    @MessagePattern('loginAbhaIdGenerateOtp')
    async loginAbhaIdGenerateOtp(body: LoginAbhaIdGenerateOtpRequestDto) {
        return this.registrationService.loginAbhaIdGenerateOtp(body);
    }

    @MessagePattern('loginAbhaIdVerifyOtp')
    async loginAbhaIdVerifyOtp(body: LoginMobileVerifyOtpRequestDto) {
        return this.registrationService.loginAbhaIdVerifyOtp(body);
    }

    @MessagePattern('loginAbhaNumberGenerateOtp')
    async loginAbhaNumberGenerateOtp(body: LoginAbhaNumberGenerateOtpRequestDto) {
        return this.registrationService.loginAbhaNumberGenerateOtp(body);
    }

    @MessagePattern('loginAbhaNumberVerifyOtp')
    async loginAbhaNumberVerifyOtp(body: LoginMobileVerifyOtpRequestDto) {
        return this.registrationService.loginAbhaNumberVerifyOtp(body);
    }

    @MessagePattern('profile')
    async getProfile(token: string) {
        return this.registrationService.getProfile(token);
    }

    @MessagePattern('qrCode')
    async getQrCode(token: string) {
        return this.registrationService.getQrCode(token);
    }

    @MessagePattern('refreshToken')
    async refreshToken(refreshToken: string) {
        return this.registrationService.refreshUserToken(refreshToken);
    }

    @MessagePattern('findProviderById')
    async findProviderById(body: FindProviderByIdRequestDto) {
        return this.registrationService.findProviderById(body);
    }

    @MessagePattern('profileShare')
    async profileShare(body: ProfileShareRequestDto) {
        return this.registrationService.profileShare(body);
    }
}
