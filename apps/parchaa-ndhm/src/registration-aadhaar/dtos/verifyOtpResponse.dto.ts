import { ApiProperty } from "@nestjs/swagger";

export class VerifyOtpResponseDto {
    @ApiProperty({default: 'a825f76b-0696-40f3-864c-5a3a5b389a83'})
    txnId: string
}