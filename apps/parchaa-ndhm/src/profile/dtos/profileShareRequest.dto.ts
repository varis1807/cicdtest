import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ProfileShareRequestDto {
    @ApiProperty({default: "IN3410000286"})
    @IsString()
    hipId: string

    @ApiProperty({default: "12345"})
    @IsString()
    counter: string

    @ApiProperty({default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1QHNieCIsImNsaWVudElkIjoiU0JYXzAwMjI1NCIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsInBock1vYmlsZSI6IjkzNzc2MTIxMzYiLCJleHAiOjE2NzYwMTI3MjksImlhdCI6MTY3NjAwNTUyOSwicGhyQWRkcmVzcyI6InNoaXZhbTE0MTVAc2J4IiwidHhuSWQiOiI4NWY5MTg3Mi1hYTI5LTQwOWItYWE0My1hOTNhNTlkMjAzNzQifQ.1YXb7PAR8io-qkZBXe8gwB5j72M536aS73vtZBsrmgp1UVJkQ09TV3TS-8vjF5zj3NlJVVNIoI0zsho2MdIr9seeKi7N2HmI_et5gym-pYniBeNeEAMUbSj0z_M2zX2Q8GGitpsq1EYexmq8vSyRPbYmqudjH2OaJFs7W8eNc1sZBnMAlSW9ynMZEU8ec_FLTh7Vp7Jj_pOFo45RVS88wecsf9jtcop90k9yoEd0PXwPCU7atmAmUSVYSs0dMU0Sv4wKf710p0MWK_PDHldz07LZix35o-9QXSESKOFfLFWGj7-rVZ08_X_yOFk4PyWFh-joo3k3n5bwXMs3fAQUxw"})
    @IsString()
    userToken: string
}