import { ApiProperty } from "@nestjs/swagger";

export class LoginMobileVerifyOtpResponseDto {
    @ApiProperty({ default: '21bf803e-aa3b-4dbf-b1c8-1620287c1996' })
    transactionId: string

    @ApiProperty({ default: 'phr_001' })
    requesterId: string

    @ApiProperty({ default: '9377612136' })
    mobileEmail: string

    @ApiProperty({
        default: [
            "shivam141511@sbx",
            "shivam1415@sbx",
            "shivam1415gg@sbx",
            "helloshivam212@sbx"
        ]
    })
    mappedPhrAddress: string[]
}