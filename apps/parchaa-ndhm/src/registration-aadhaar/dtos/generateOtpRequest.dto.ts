import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GenerateOtpRequestDto {

    @ApiProperty({type: 'string', default: '278623899118'})
    @IsString()
    aadhaar: string;

}