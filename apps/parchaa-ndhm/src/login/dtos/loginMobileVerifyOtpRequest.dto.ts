import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginMobileVerifyOtpRequestDto {
    @ApiProperty({default: '0fd9e004-86a6-4130-a952-b17ccfd42b6e'})
    @IsString()
    txnId: string

    @ApiProperty({default: '909090'})
    @IsString()
    otp: string
}