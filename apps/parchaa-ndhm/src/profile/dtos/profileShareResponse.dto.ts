import { ApiProperty } from "@nestjs/swagger"

export class ProfileShareResponseDto {
    @ApiProperty({default: "SUCCESS"})
    status: string

    @ApiProperty({default: "shivam1415@sbx"})
    healthId: string

    @ApiProperty({default: "39"})
    tokenNumber: string
}