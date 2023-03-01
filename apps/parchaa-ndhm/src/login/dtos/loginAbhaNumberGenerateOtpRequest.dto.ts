import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginAbhaNumberGenerateOtpRequestDto {
    @ApiProperty({default: '43-4221-5105-6749'})
    @IsString()
    abhaNumber: string
}