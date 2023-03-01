import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateUserRequestDto {

    @ApiProperty({ default: "Shivam Pachchigar" })
    @IsString()
    fullName: string

    @ApiProperty({ default: "M" })
    @IsString()
    gender: string

    @ApiProperty({ default: "9377612136" })
    @IsString()
    mobile: string

    @ApiProperty({ default: "C-7, Tirupati Nagar" })
    @IsString()
    address: string

    @ApiProperty({ default: "395007" })
    @IsString()
    pincode: string

    @ApiProperty({ default: "Gujarat" })
    @IsString()
    state: string

    @ApiProperty({default: '14'})
    @IsString()
    dayOfBirth: string

    @ApiProperty({default: '11'})
    @IsString()
    monthOfBirth: string

    @ApiProperty({default: '2002'})
    @IsString()
    yearOfBirth: string

    @ApiProperty({default: ["shivam1415@sbx"]})
    @IsArray()
    healthIds: string[]

}