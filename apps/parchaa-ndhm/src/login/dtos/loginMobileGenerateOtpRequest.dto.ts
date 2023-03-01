import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginMobileGenerateOtpRequestDto {
    @ApiProperty({default: '9377612136'})
    @IsString()
    mobile: string;
}