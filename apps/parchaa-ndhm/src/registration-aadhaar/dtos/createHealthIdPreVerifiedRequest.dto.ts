import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateHealthIdPreVerifiedRequestDto {
    @ApiProperty({default: "a825f76b-0696-40f3-864c-5a3a5b389a83"})
    @IsString()
    txnId: string

    @ApiProperty({default: "deepak.pant"})
    @IsString()
    healthId: string
}