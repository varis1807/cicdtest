import { ApiProperty } from "@nestjs/swagger";

export class FindProviderByIdResponseDto {
    
    @ApiProperty({default: {
        "name": "Shristi Hospital",
        "id": "IN3410000260"
    }})
    identifier: Object

    @ApiProperty({default: null})
    telephone: string

    @ApiProperty({default: null})
    city: string

    @ApiProperty({default: null})
    latitude: string

    @ApiProperty({default: null})
    longitude: string

    @ApiProperty({default: null})
    address: string

    @ApiProperty({default: null})
    districtCode: string

    @ApiProperty({default: null})
    stateCode: string

    @ApiProperty({default: null})
    pinCode: string

    @ApiProperty({default: []})
    facilityType: string[]

    @ApiProperty({default: false})
    isHIP: boolean

    @ApiProperty({default: null})
    attributes: string

}