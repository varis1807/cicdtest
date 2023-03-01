import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRequestDto } from 'apps/parchaa-ndhm/src/user/dtos/createUserRequest.dto';
import { UpdateUserRequestDto } from 'apps/parchaa-ndhm/src/user/dtos/updateUserRequest.dto';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserServicesService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private http: HttpService) { }

    uniqByFilter<T>(array: T[]) {
        return array.filter((value, index) => array.indexOf(value) === index);
    }

    async createUser(body: CreateUserRequestDto): Promise<User> {
        let user: User = new User();
        user.fullName = body.fullName;
        user.gender = body.gender;
        user.mobile = body.mobile;
        user.address = body.address;
        user.pincode = body.pincode;
        user.state = body.state;
        user.dayOfBirth = body.dayOfBirth;
        user.monthOfBirth = body.monthOfBirth;
        user.yearOfBirth = body.yearOfBirth;
        user.healthIds = body.healthIds;

        const existUser = await this.findByMobile(body.mobile);
        
        if((existUser != null) && (existUser.mobile == body.mobile) && (existUser.fullName == body.fullName)){
            existUser.healthIds = this.uniqByFilter(existUser.healthIds.concat(body.healthIds));
            user = existUser;
        }

        try {
            const res = await lastValueFrom(this.http.post(
                `${process.env.FHIR_BASEURL}/Patient`,
                {
                    "resourceType": "Patient",
    
                    "name": [
                        {
                            "family": `${body.fullName.split(' ')[1]}`?? "",
                            "given": [
                                `${body.fullName.split(' ')[0]}`?? ""
                            ],
                        }
                    ],
                    "gender": body.gender == "M" ? "male" : body.gender == "F" ? "female" : "other",
                    "active": true,
                    "identifier": {
                        "use": "official",
                        "value": "ANY_UNIQUE_VALUE"
                    },
                    "birthDate": `${body.yearOfBirth}-${body.monthOfBirth}-${body.dayOfBirth}` ?? ""
                }
            ))
            user.fhirId = +res.data["id"];
        } catch(e) {
            console.log(`Error updating to FHIR: ${e}`)
        }


        return this.userRepository.save(user);
    }

    updateUser(body: UpdateUserRequestDto): Promise<User> {
        let user: User = new User();
        user.fullName = body.fullName;
        user.gender = body.gender;
        user.mobile = body.mobile;
        user.address = body.address;
        user.pincode = body.pincode;
        user.state = body.state;
        user.dayOfBirth = body.dayOfBirth;
        user.monthOfBirth = body.monthOfBirth;
        user.yearOfBirth = body.yearOfBirth;
        user.healthIds = body.healthIds;
        user.id = body.id;
        return this.userRepository.save(user);
    }

    deleteUser(id: number): Promise<any> {
        return this.userRepository.delete({ id: id });
    }

    findAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    findByMobile(mobile: string): Promise<User> {
        return this.userRepository.findOne({
            where: {
                mobile: mobile
            }
        });
    }

    findById(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }
}
