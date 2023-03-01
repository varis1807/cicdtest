/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserServicesModule = void 0;
const axios_1 = __webpack_require__(4);
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const user_entity_1 = __webpack_require__(8);
const user_services_controller_1 = __webpack_require__(10);
const user_services_service_1 = __webpack_require__(15);
let UserServicesModule = class UserServicesModule {
};
UserServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [
                    config_1.ConfigModule.forRoot({
                        isGlobal: true,
                        envFilePath: ".env",
                    }),
                ],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    synchronize: configService.get('DB_SYNC'),
                    entities: [user_entity_1.User]
                }),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            axios_1.HttpModule.register({
                timeout: 6000,
                maxRedirects: 5,
            })
        ],
        controllers: [user_services_controller_1.UserServicesController],
        providers: [user_services_service_1.UserServicesService],
    })
], UserServicesModule);
exports.UserServicesModule = UserServicesModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const typeorm_1 = __webpack_require__(9);
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "pincode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "dayOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "monthOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "yearOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "abhaNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "aadhaarNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true }),
    __metadata("design:type", Array)
], User.prototype, "healthIds", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", Number)
], User.prototype, "fhirId", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserServicesController = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(2);
const createUserRequest_dto_1 = __webpack_require__(11);
const updateUserRequest_dto_1 = __webpack_require__(14);
const user_services_service_1 = __webpack_require__(15);
let UserServicesController = class UserServicesController {
    constructor(userServicesService) {
        this.userServicesService = userServicesService;
    }
    async createUser(body) {
        return this.userServicesService.createUser(body);
    }
    async findByMobile(mobile) {
        return this.userServicesService.findByMobile(mobile);
    }
    async findById(id) {
        return this.userServicesService.findById(id);
    }
    async findAll() {
        return this.userServicesService.findAllUsers();
    }
    async updateUser(body) {
        return this.userServicesService.updateUser(body);
    }
    async deleteUser(id) {
        return this.userServicesService.deleteUser(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('createUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof createUserRequest_dto_1.CreateUserRequestDto !== "undefined" && createUserRequest_dto_1.CreateUserRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserServicesController.prototype, "createUser", null);
__decorate([
    (0, microservices_1.MessagePattern)('findByMobile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserServicesController.prototype, "findByMobile", null);
__decorate([
    (0, microservices_1.MessagePattern)('findById'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserServicesController.prototype, "findById", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserServicesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof updateUserRequest_dto_1.UpdateUserRequestDto !== "undefined" && updateUserRequest_dto_1.UpdateUserRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserServicesController.prototype, "updateUser", null);
__decorate([
    (0, microservices_1.MessagePattern)('deleteUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserServicesController.prototype, "deleteUser", null);
UserServicesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_services_service_1.UserServicesService !== "undefined" && user_services_service_1.UserServicesService) === "function" ? _a : Object])
], UserServicesController);
exports.UserServicesController = UserServicesController;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class CreateUserRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Shivam Pachchigar" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "M" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "9377612136" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "C-7, Tirupati Nagar" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "395007" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "pincode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Gujarat" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '14' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "dayOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '11' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "monthOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2002' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "yearOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["shivam1415@sbx"] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateUserRequestDto.prototype, "healthIds", void 0);
exports.CreateUserRequestDto = CreateUserRequestDto;


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class UpdateUserRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUserRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Shivam Pachchigar" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "M" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "9377612136" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "C-7, Tirupati Nagar" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "395007" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "pincode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Gujarat" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '14' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "dayOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '11' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "monthOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2002' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "yearOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["shivam1415@sbx"] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateUserRequestDto.prototype, "healthIds", void 0);
exports.UpdateUserRequestDto = UpdateUserRequestDto;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserServicesService = void 0;
const axios_1 = __webpack_require__(4);
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(7);
const rxjs_1 = __webpack_require__(16);
const typeorm_2 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
let UserServicesService = class UserServicesService {
    constructor(userRepository, http) {
        this.userRepository = userRepository;
        this.http = http;
    }
    uniqByFilter(array) {
        return array.filter((value, index) => array.indexOf(value) === index);
    }
    async createUser(body) {
        var _a, _b, _c;
        let user = new user_entity_1.User();
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
        if ((existUser != null) && (existUser.mobile == body.mobile) && (existUser.fullName == body.fullName)) {
            existUser.healthIds = this.uniqByFilter(existUser.healthIds.concat(body.healthIds));
            user = existUser;
        }
        try {
            const res = await (0, rxjs_1.lastValueFrom)(this.http.post(`${process.env.FHIR_BASEURL}/Patient`, {
                "resourceType": "Patient",
                "name": [
                    {
                        "family": (_a = `${body.fullName.split(' ')[1]}`) !== null && _a !== void 0 ? _a : "",
                        "given": [
                            (_b = `${body.fullName.split(' ')[0]}`) !== null && _b !== void 0 ? _b : ""
                        ],
                    }
                ],
                "gender": body.gender == "M" ? "male" : body.gender == "F" ? "female" : "other",
                "active": true,
                "identifier": {
                    "use": "official",
                    "value": "ANY_UNIQUE_VALUE"
                },
                "birthDate": (_c = `${body.yearOfBirth}-${body.monthOfBirth}-${body.dayOfBirth}`) !== null && _c !== void 0 ? _c : ""
            }));
            user.fhirId = +res.data["id"];
        }
        catch (e) {
            console.log(`Error updating to FHIR: ${e}`);
        }
        return this.userRepository.save(user);
    }
    updateUser(body) {
        let user = new user_entity_1.User();
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
    deleteUser(id) {
        return this.userRepository.delete({ id: id });
    }
    findAllUsers() {
        return this.userRepository.find();
    }
    findByMobile(mobile) {
        return this.userRepository.findOne({
            where: {
                mobile: mobile
            }
        });
    }
    findById(id) {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }
};
UserServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _b : Object])
], UserServicesService);
exports.UserServicesService = UserServicesService;


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const microservices_1 = __webpack_require__(2);
const user_services_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(user_services_module_1.UserServicesModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            port: 8082,
            retryAttempts: 3,
            retryDelay: 1000
        }
    });
    await app.listen();
    console.log('user-services started');
}
bootstrap();

})();

/******/ })()
;