import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class FindByIdRequestDto {
    @ApiProperty({default: 1})
    @IsNumber()
    id: number
}