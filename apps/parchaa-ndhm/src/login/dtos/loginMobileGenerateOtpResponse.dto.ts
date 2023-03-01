import { ApiProperty } from "@nestjs/swagger";

export class LoginMobileGenerateOtpResponseDto {
    @ApiProperty({default: '1431fa4f-82b4-4cba-bdc0-770e9178f644'})
    transactionId: string;

    @ApiProperty({default: 'IN041XX'})
    requesterId: string;

    @ApiProperty({default: 'MOBILE_OTP'})
    authMode: string;

    @ApiProperty({default: null})
    error: string;
}