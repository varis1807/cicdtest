import { ApiProperty } from "@nestjs/swagger";

export class ExistByHealthIdResponseDto {
    @ApiProperty({default: 'false'})
    status: boolean
}