import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateHealthIdRequestDto {
    @ApiProperty({default: '14'})
    @IsString()
    dayOfBirth: string

    @ApiProperty({default: '11'})
    @IsString()
    monthOfBirth: string

    @ApiProperty({default: '2002'})
    @IsString()
    yearOfBirth: string

    @ApiProperty({default: 'Shivam'})
    @IsString()
    firstName: string

    @ApiProperty({default: 'Pachchigar'})
    @IsString()
    lastName: string

    @ApiProperty({default: 'shivam'})
    @IsString()
    name: string

    @ApiProperty({default: 'shivam1411'})
    @IsString()
    healthId: string

    @ApiProperty({default: '395007'})
    @IsString()
    pincode: string

    @ApiProperty({default: 'M'})
    @IsString()
    gender: string

    @ApiProperty({default: '35a8ea27-1252-4d3a-b568-4a634ffa5071'})
    @IsString()
    txnId: string

    @ApiProperty({default: 'eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI5Mzc3NjEyMTM2IiwiY2xpZW50SWQiOiJTQlhfMDAyMjU0Iiwic3lzdGVtIjoiQUJIQS1OIiwiZXhwIjoxNjczMzI2Mzk1LCJpYXQiOjE2NzMzMjQ1OTUsInR4bklkIjoiNmQ2NTc3MTEtYWZjMy00MWM1LWEyMTYtOGIzY2ViNTdhMWE4In0.nAsJJJYHq5AVhqtyW5WiyQ2zRh4zAm3M8D2JCidHVOleVme5nT7oCA_dxWnbp44b84HFubPfyUsMVFH62W_jK4cMf6dLVgDb3WdNMSmuKEWoiXqyIBycLgMweWIPhc_jhBNYUmfj1iy1HjvoXmTWnKrGBFeg7UBCuLdnxzOdLUck4eAdgXjtGrjM-BPLP_kiOU7Gi9FWyRfEipzyWVhGPRFpxll7IOizLJUAninbSG2mYJr_oPXK6EpIBUjruZDFizHRlDTn4gn1qQgTW2R5VZf4zOJBbCBujlQB42wLlcBZda25t2RJrDc4U263j6M7GTwumdGd-su99OYhL2muCE32ZQFdnRwS1iKmwIbusKeWeBKD4cHY9DqG8ro5U7dwrFCX02hsDUVwza9vLnVBsCVL7WuPVz0x4jRD5ofKYB-LdLxSMCGd8Ja8qkrwQNocW4cd545oP4zxmKxaSZrJ4cc1NcGXPs8nD7aS8RD7_cskXaejVFV9Vegmzbh8tZUOgkSvxL7hVq7opYWZr8-Qy1tO6fz-N2fBH49kh-75Gt9Px_Zu26ZctsB6Eh42BdT7ASQ5dGuRN3Ksf9QzUP2-6edVqdQbTc8YRjO1tO2TQCMt-aq2-gZXYOtHI-2CM_6GscuS7Mrn3Jnq750QDXojjZNadN9LH0GdJz22q9d_WSc'})
    @IsNotEmpty()
    token: string
}