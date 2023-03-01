import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginMobileConfirmRequestDto {
    @ApiProperty({default: 'shivam1415@sbx'})
    @IsString()
    patientId: string

    @ApiProperty({default: '21bf803e-aa3b-4dbf-b1c8-1620287c1996'})
    @IsString()
    txnId: string
}