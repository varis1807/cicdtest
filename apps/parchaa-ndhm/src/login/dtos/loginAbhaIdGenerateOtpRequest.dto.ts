import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginAbhaIdGenerateOtpRequestDto {
    @ApiProperty({default: 'shivam1415@sbx'})
    @IsString()
    abhaId: string
}