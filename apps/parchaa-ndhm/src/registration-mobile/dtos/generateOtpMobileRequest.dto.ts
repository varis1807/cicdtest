import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GenerateOtpMobileRequestDto {

    @ApiProperty({type: 'string', default: '9377612136'})
    @IsString()
    mobile: string;

}