import { ApiProperty } from "@nestjs/swagger";

export class CreateHealthIdResponseDto {
    @ApiProperty({default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1Z2dnQHNieCIsImNsaWVudElkIjoiUEhSLVdFQiIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsImV4cCI6MTY3MzIwMjYwOCwiaWF0IjoxNjczMTk1NDA4LCJwaHJBZGRyZXNzIjoic2hpdmFtMTQxNWdnZ0BzYngifQ.KXDYpfM33GFA2kLVfTUsrARi-sIyGlHz2gvNlTt8WrfvMFuzkIy7jM4f7JC9NAI9Jc0YOcflD2l_qVGRE99XSsbYJAJvGy8-3STBfa0aIJygO2TmAGB_Q-TBgeHgLsJzDUii3xazJXO45J7ZA3_2edt8d6vOGjLb1yatcshd6BCJQvAb9U5-Wy44lwvOXJ_B9JKCSNH9XXqJaxXE4RC-lCRruHp1dfRbJfWjrLIeo_0Sp3V73ccsG0Xd65XNIm_gAgF9i_08LqH7wOF1CnCmhoF9mSdCHHO2Ol3i_kinp4KCYPrEc_R0grDOYQBib383CBZVqpCJfA40ZPRkk5_uwg"})
    token: string

    @ApiProperty({default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1Z2dnQHNieCIsImNsaWVudElkIjoiUEhSLVdFQiIsInN5c3RlbSI6IkFCSEEtQSIsInR5cCI6IlJlZnJlc2giLCJleHAiOjE2NzQ0OTE0MDgsImlhdCI6MTY3MzE5NTQwOH0.LAFDLosImyk5rAJYJlsbfYlxLtaHxqafVkS8VKJ5vrOLXdQi7iLrS9po4O-wc0ITsnWAkqzPrCQYYVVx-km8NPf9IWkRWmqmYEoc-42WNXMepYsSb1ZxFJYL5wgCCc_NZ5oETrg7Jz-WkRVQtsWnC__KlqJFzjZPWNB9jtzSkrkZUBuwPbXY65LiRZVyZSRJLWQv1D-TLsZhIHfDJmcEEh7IYTl3uSX5Pmi8dXO277QGw2VF0ObpIEPwis1jc5OnoLQOlcfFVLI8vvaDVngEizmxx2d5COjp1yFIBMSH7VhfzunPDmR2OFRpI5rwgmw7asGm9IY4eJozVS7cI2zk2A"})
    refreshToken: string

    @ApiProperty({default: null})
    healthIdNumber: string

    @ApiProperty({default: null})
    name: string

    @ApiProperty({default: "M"})
    gender: string

    @ApiProperty({default: "200"})
    yearOfBirth: string

    @ApiProperty({default: "6"})
    monthOfBirth: string

    @ApiProperty({default: "2"})
    dayOfBirth: string

    @ApiProperty({default: "Hi"})
    firstName: string

    @ApiProperty({default: null})
    middleName: string

    @ApiProperty({default: null})
    stateCode: string

    @ApiProperty({default: null})
    districtCode: string

    @ApiProperty({default: null})
    stateName: string

    @ApiProperty({default: null})
    districtName: string

    @ApiProperty({default: null})
    email: string

    @ApiProperty({default: null})
    kycPhoto: string

    @ApiProperty({default: null})
    profilePhoto: string

    @ApiProperty({default: "9377612136"})
    mobile: string

    @ApiProperty({default: ["DEMOGRAPHICS", "PASSWORD", "MOBILE_OTP"]})
    authMethods: string[]

    @ApiProperty({default: "395002"})
    pincode: string

    @ApiProperty({default: "null"})
    tags: string

    @ApiProperty({default: true})
    new: boolean
}