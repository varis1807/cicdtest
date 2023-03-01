import { ApiProperty } from "@nestjs/swagger";

export class GenerateOtpMobileResponseDto {
    @ApiProperty({default: '35a8ea27-1252-4d3a-b568-4a634ffa5071'})
    txnId: string
}