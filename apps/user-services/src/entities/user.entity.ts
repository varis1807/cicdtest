import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    gender: string;

    @Column()
    mobile: string;

    @Column()
    address: string;

    @Column()
    pincode: string;

    @Column()
    state: string;

    @Column()
    dayOfBirth: string;

    @Column()
    monthOfBirth: string;

    @Column()
    yearOfBirth: string;

    @Column({nullable: true})
    abhaNumber: number;

    @Column({nullable: true})
    aadhaarNumber: number;

    @Column("text", {array: true})
    healthIds: string[];

    @Column({nullable:true, default: null})
    fhirId: number;
}