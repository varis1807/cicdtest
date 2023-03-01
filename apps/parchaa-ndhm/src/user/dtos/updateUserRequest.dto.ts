import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserRequestDto {

    @ApiProperty({default: 1})
    @IsNumber()
    id: number

    @ApiProperty({ default: "Shivam Pachchigar" })
    @IsOptional()
    @IsString()
    fullName: string

    @ApiProperty({ default: "M" })
    @IsOptional()
    @IsString()
    gender: string

    @ApiProperty({ default: "9377612136" })
    @IsOptional()
    @IsString()
    mobile: string

    @ApiProperty({ default: "C-7, Tirupati Nagar" })
    @IsOptional()
    @IsString()
    address: string

    @ApiProperty({ default: "395007" })
    @IsOptional()
    @IsString()
    pincode: string

    @ApiProperty({ default: "Gujarat" })
    @IsOptional()
    @IsString()
    state: string

    @ApiProperty({default: '14'})
    @IsOptional()
    @IsString()
    dayOfBirth: string

    @ApiProperty({default: '11'})
    @IsOptional()
    @IsString()
    monthOfBirth: string

    @ApiProperty({default: '2002'})
    @IsOptional()
    @IsString()
    yearOfBirth: string

    @ApiProperty({default: ["shivam1415@sbx"]})
    @IsOptional()
    @IsArray()
    healthIds: string[]

}