import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ExistByHealthIdRequestDto {
    @ApiProperty({default: 'shivam1411'})
    @IsString()
    healthId: string
}