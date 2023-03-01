import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GenerateMobileOtpRequestDto {

    @ApiProperty({type: 'string', default: 'a825f76b-0696-40f3-864c-5a3a5b389a83'})
    @IsString()
    txnId: string;

    @ApiProperty({type: 'string', default: '9377612136'})
    @IsString()
    mobile: string;

}