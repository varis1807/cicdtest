import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class VerifyOtpMobileRequestDto {
    @ApiProperty({default: '35a8ea27-1252-4d3a-b568-4a634ffa5071'})
    @IsString()
    txnId: string

    @ApiProperty({default: "110220"})
    @IsString()
    otp: string
}