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

module.exports = require("@nestjs/swagger");

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
exports.AppModule = void 0;
const common_1 = __webpack_require__(4);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const registration_mobile_module_1 = __webpack_require__(7);
const registration_aadhaar_module_1 = __webpack_require__(21);
const throttler_1 = __webpack_require__(32);
const core_1 = __webpack_require__(1);
const config_1 = __webpack_require__(33);
const login_module_1 = __webpack_require__(34);
const profile_module_1 = __webpack_require__(44);
const user_module_1 = __webpack_require__(51);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            registration_mobile_module_1.RegistrationMobileModule,
            registration_aadhaar_module_1.RegistrationAadhaarModule,
            throttler_1.ThrottlerModule.forRoot({ ttl: 5, limit: 3 }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            login_module_1.LoginModule,
            profile_module_1.ProfileModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Greet hello', tags: ['Server check'] }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ok' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(4);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationMobileModule = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const registration_mobile_controller_1 = __webpack_require__(9);
const registration_mobile_service_1 = __webpack_require__(17);
let RegistrationMobileModule = class RegistrationMobileModule {
};
RegistrationMobileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'ABHA-SERVICES',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        port: 8081
                    }
                }
            ])
        ],
        controllers: [registration_mobile_controller_1.RegistrationMobileController],
        providers: [registration_mobile_service_1.RegistrationMobileService]
    })
], RegistrationMobileModule);
exports.RegistrationMobileModule = RegistrationMobileModule;


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 9 */
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationMobileController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const generateOtpMobileRequest_dto_1 = __webpack_require__(10);
const generateOtpMobileResponse_dto_1 = __webpack_require__(12);
const verifyOtpMobileRequest_dto_1 = __webpack_require__(13);
const verifyOtpMobileResponse_dto_1 = __webpack_require__(14);
const createHealthIdRequest_dto_1 = __webpack_require__(15);
const createHealthIdResponse_dto_1 = __webpack_require__(16);
const registration_mobile_service_1 = __webpack_require__(17);
const existByHealthIdRequest_dto_1 = __webpack_require__(19);
const existByHealthIdResponse_dto_1 = __webpack_require__(20);
let RegistrationMobileController = class RegistrationMobileController {
    constructor(registrationMobileService) {
        this.registrationMobileService = registrationMobileService;
    }
    async generateOtp(body) {
        const res = await this.registrationMobileService.generateOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Enter correct phone number", common_1.HttpStatus.BAD_REQUEST);
                case 422: throw new common_1.HttpException("Couldn\'t generate OTP", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async verifyOtp(body) {
        const res = await this.registrationMobileService.verifyOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 422: throw new common_1.HttpException("OTP entered is incorrect", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async createHealthId(body) {
        const res = await this.registrationMobileService.createHealthId(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async existByHealthId(body) {
        const res = await this.registrationMobileService.existByHealthId(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 422: throw new common_1.HttpException("No Details Found for Given ABHA number Including permanently deleted HIDs", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
};
__decorate([
    (0, common_1.Post)('generateOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Send OTP to given mobile number', tags: ['Registration through mobile'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: generateOtpMobileResponse_dto_1.GenerateOtpMobileResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Couldn\'t generate OTP' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Enter correct phone number' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof generateOtpMobileRequest_dto_1.GenerateOtpMobileRequestDto !== "undefined" && generateOtpMobileRequest_dto_1.GenerateOtpMobileRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RegistrationMobileController.prototype, "generateOtp", null);
__decorate([
    (0, common_1.Post)('verifyOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify OTP sent to mobile number (Please ensure OTP is of 6 digits)', tags: ['Registration through mobile'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: verifyOtpMobileResponse_dto_1.VerifyOtpMobileResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'OTP entered is incorrect' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof verifyOtpMobileRequest_dto_1.VerifyOtpMobileRequestDto !== "undefined" && verifyOtpMobileRequest_dto_1.VerifyOtpMobileRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], RegistrationMobileController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Post)('createHealthId'),
    (0, swagger_1.ApiOperation)({ summary: 'Creates healthId', tags: ['Registration through mobile'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: createHealthIdResponse_dto_1.CreateHealthIdResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof createHealthIdRequest_dto_1.CreateHealthIdRequestDto !== "undefined" && createHealthIdRequest_dto_1.CreateHealthIdRequestDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], RegistrationMobileController.prototype, "createHealthId", null);
__decorate([
    (0, common_1.Post)('existByHealthId'),
    (0, swagger_1.ApiOperation)({ summary: 'Creates healthId', tags: ['Registration through mobile'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: existByHealthIdResponse_dto_1.ExistByHealthIdResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'No Details Found for Given ABHA number Including permanently deleted HIDs' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof existByHealthIdRequest_dto_1.ExistByHealthIdRequestDto !== "undefined" && existByHealthIdRequest_dto_1.ExistByHealthIdRequestDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], RegistrationMobileController.prototype, "existByHealthId", null);
RegistrationMobileController = __decorate([
    (0, common_1.Controller)('registration/mobile'),
    __metadata("design:paramtypes", [typeof (_a = typeof registration_mobile_service_1.RegistrationMobileService !== "undefined" && registration_mobile_service_1.RegistrationMobileService) === "function" ? _a : Object])
], RegistrationMobileController);
exports.RegistrationMobileController = RegistrationMobileController;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenerateOtpMobileRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class GenerateOtpMobileRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', default: '9377612136' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateOtpMobileRequestDto.prototype, "mobile", void 0);
exports.GenerateOtpMobileRequestDto = GenerateOtpMobileRequestDto;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 12 */
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
exports.GenerateOtpMobileResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class GenerateOtpMobileResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '35a8ea27-1252-4d3a-b568-4a634ffa5071' }),
    __metadata("design:type", String)
], GenerateOtpMobileResponseDto.prototype, "txnId", void 0);
exports.GenerateOtpMobileResponseDto = GenerateOtpMobileResponseDto;


/***/ }),
/* 13 */
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
exports.VerifyOtpMobileRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class VerifyOtpMobileRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '35a8ea27-1252-4d3a-b568-4a634ffa5071' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOtpMobileRequestDto.prototype, "txnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "110220" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOtpMobileRequestDto.prototype, "otp", void 0);
exports.VerifyOtpMobileRequestDto = VerifyOtpMobileRequestDto;


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
exports.VerifyOtpMobileResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class VerifyOtpMobileResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI5Mzc3NjEyMTM2IiwiY2xpZW50SWQiOiJTQlhfMDAyMjU0Iiwic3lzdGVtIjoiQUJIQS1OIiwiZXhwIjoxNjcyOTg4MzA3LCJpYXQiOjE2NzI5ODY1MDcsInR4bklkIjoiMzVhOGVhMjctMTI1Mi00ZDNhLWI1NjgtNGE2MzRmZmE1MDcxIn0.AquNlPILLuc6P0wb2LhtYx-0LMTTejk1kPBrssYL3ZyPnDpdudDDxDfokpYTiLCuaW4cD6iatnP0Mlb6mTaC7ffyMd0V-XTkyTjuO4sJ2vCzMvwIB-jePM8CdfBQYtSjJqJLWYqWbdSfjjuTKjE0vQc-lyyhtPMfS-eNzmns9nn89-RgvELNtrfHmIiGSjZMvdg5XdmwWtx5-Gf7rY2YHwgQw3VeOzZX58nEkOTvgPdzpCpmWE45rTK-EuagDT0t7DutzDHa7jk4egC4WeW1ILkiBsrzUJXvMFNwQn_wsJBrnGonIr9OOFZ81nShG88cnbEX4ovXeKdynNBfiI9dQUKMnOMAAZ5Cfbkz_nJ92rIUDMsedS8LCvKvO-jLTQhxb99zt4wpi8kfQa12jgFTddV8yKXh6WQKQvs8V3ZjLo2ykVntnGcBThG0rnqIPVvDzJ4Qq4h6vJ8sGe7kiBXvspGMP4MZQ8t78cBnKKmAN9OyMZiDaWlNa4t2ONhXfhu-p6wM4a5twEmpMZ7dbvuJTTFQl5Tc5fYHc3_0Trh8r3Tb3u4T4lhsacz0WF0ONZEQ0fgGxBwvnnTAPJsUD2DAn9xav82xWayAyMPLk_f-oupMowttx2nWeNQcIGGxLR8azEO_N2OmkeZmibU9Mjl3ZTecrBJfCHyt4PrRP0ywF-I' }),
    __metadata("design:type", String)
], VerifyOtpMobileResponseDto.prototype, "token", void 0);
exports.VerifyOtpMobileResponseDto = VerifyOtpMobileResponseDto;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateHealthIdRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class CreateHealthIdRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '14' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "dayOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '11' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "monthOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2002' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "yearOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Shivam' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Pachchigar' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam1411' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "healthId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '395007' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "pincode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'M' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '35a8ea27-1252-4d3a-b568-4a634ffa5071' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "txnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI5Mzc3NjEyMTM2IiwiY2xpZW50SWQiOiJTQlhfMDAyMjU0Iiwic3lzdGVtIjoiQUJIQS1OIiwiZXhwIjoxNjczMzI2Mzk1LCJpYXQiOjE2NzMzMjQ1OTUsInR4bklkIjoiNmQ2NTc3MTEtYWZjMy00MWM1LWEyMTYtOGIzY2ViNTdhMWE4In0.nAsJJJYHq5AVhqtyW5WiyQ2zRh4zAm3M8D2JCidHVOleVme5nT7oCA_dxWnbp44b84HFubPfyUsMVFH62W_jK4cMf6dLVgDb3WdNMSmuKEWoiXqyIBycLgMweWIPhc_jhBNYUmfj1iy1HjvoXmTWnKrGBFeg7UBCuLdnxzOdLUck4eAdgXjtGrjM-BPLP_kiOU7Gi9FWyRfEipzyWVhGPRFpxll7IOizLJUAninbSG2mYJr_oPXK6EpIBUjruZDFizHRlDTn4gn1qQgTW2R5VZf4zOJBbCBujlQB42wLlcBZda25t2RJrDc4U263j6M7GTwumdGd-su99OYhL2muCE32ZQFdnRwS1iKmwIbusKeWeBKD4cHY9DqG8ro5U7dwrFCX02hsDUVwza9vLnVBsCVL7WuPVz0x4jRD5ofKYB-LdLxSMCGd8Ja8qkrwQNocW4cd545oP4zxmKxaSZrJ4cc1NcGXPs8nD7aS8RD7_cskXaejVFV9Vegmzbh8tZUOgkSvxL7hVq7opYWZr8-Qy1tO6fz-N2fBH49kh-75Gt9Px_Zu26ZctsB6Eh42BdT7ASQ5dGuRN3Ksf9QzUP2-6edVqdQbTc8YRjO1tO2TQCMt-aq2-gZXYOtHI-2CM_6GscuS7Mrn3Jnq750QDXojjZNadN9LH0GdJz22q9d_WSc' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateHealthIdRequestDto.prototype, "token", void 0);
exports.CreateHealthIdRequestDto = CreateHealthIdRequestDto;


/***/ }),
/* 16 */
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
exports.CreateHealthIdResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class CreateHealthIdResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1Z2dnQHNieCIsImNsaWVudElkIjoiUEhSLVdFQiIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsImV4cCI6MTY3MzIwMjYwOCwiaWF0IjoxNjczMTk1NDA4LCJwaHJBZGRyZXNzIjoic2hpdmFtMTQxNWdnZ0BzYngifQ.KXDYpfM33GFA2kLVfTUsrARi-sIyGlHz2gvNlTt8WrfvMFuzkIy7jM4f7JC9NAI9Jc0YOcflD2l_qVGRE99XSsbYJAJvGy8-3STBfa0aIJygO2TmAGB_Q-TBgeHgLsJzDUii3xazJXO45J7ZA3_2edt8d6vOGjLb1yatcshd6BCJQvAb9U5-Wy44lwvOXJ_B9JKCSNH9XXqJaxXE4RC-lCRruHp1dfRbJfWjrLIeo_0Sp3V73ccsG0Xd65XNIm_gAgF9i_08LqH7wOF1CnCmhoF9mSdCHHO2Ol3i_kinp4KCYPrEc_R0grDOYQBib383CBZVqpCJfA40ZPRkk5_uwg" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1Z2dnQHNieCIsImNsaWVudElkIjoiUEhSLVdFQiIsInN5c3RlbSI6IkFCSEEtQSIsInR5cCI6IlJlZnJlc2giLCJleHAiOjE2NzQ0OTE0MDgsImlhdCI6MTY3MzE5NTQwOH0.LAFDLosImyk5rAJYJlsbfYlxLtaHxqafVkS8VKJ5vrOLXdQi7iLrS9po4O-wc0ITsnWAkqzPrCQYYVVx-km8NPf9IWkRWmqmYEoc-42WNXMepYsSb1ZxFJYL5wgCCc_NZ5oETrg7Jz-WkRVQtsWnC__KlqJFzjZPWNB9jtzSkrkZUBuwPbXY65LiRZVyZSRJLWQv1D-TLsZhIHfDJmcEEh7IYTl3uSX5Pmi8dXO277QGw2VF0ObpIEPwis1jc5OnoLQOlcfFVLI8vvaDVngEizmxx2d5COjp1yFIBMSH7VhfzunPDmR2OFRpI5rwgmw7asGm9IY4eJozVS7cI2zk2A" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "healthIdNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "M" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "200" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "yearOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "6" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "monthOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "2" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "dayOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Hi" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "middleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "districtCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "stateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "districtName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "kycPhoto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "profilePhoto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "9377612136" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["DEMOGRAPHICS", "PASSWORD", "MOBILE_OTP"] }),
    __metadata("design:type", Array)
], CreateHealthIdResponseDto.prototype, "authMethods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "395002" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "pincode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "null" }),
    __metadata("design:type", String)
], CreateHealthIdResponseDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    __metadata("design:type", Boolean)
], CreateHealthIdResponseDto.prototype, "new", void 0);
exports.CreateHealthIdResponseDto = CreateHealthIdResponseDto;


/***/ }),
/* 17 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationMobileService = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const rxjs_1 = __webpack_require__(18);
let RegistrationMobileService = class RegistrationMobileService {
    constructor(abhaClient) {
        this.abhaClient = abhaClient;
    }
    async generateOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('generateMobileOtp', body));
        console.log(response);
        return response;
    }
    async verifyOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('verifyMobileOtp', body));
        console.log(response);
        return response;
    }
    async createHealthId(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('createHealthId', body));
        console.log(response);
        return response;
    }
    async existByHealthId(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('existByHealthId', body));
        console.log(response);
        return response;
    }
};
RegistrationMobileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ABHA-SERVICES')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], RegistrationMobileService);
exports.RegistrationMobileService = RegistrationMobileService;


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 19 */
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
exports.ExistByHealthIdRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class ExistByHealthIdRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam1411' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExistByHealthIdRequestDto.prototype, "healthId", void 0);
exports.ExistByHealthIdRequestDto = ExistByHealthIdRequestDto;


/***/ }),
/* 20 */
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
exports.ExistByHealthIdResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class ExistByHealthIdResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'false' }),
    __metadata("design:type", Boolean)
], ExistByHealthIdResponseDto.prototype, "status", void 0);
exports.ExistByHealthIdResponseDto = ExistByHealthIdResponseDto;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationAadhaarModule = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const registration_aadhaar_controller_1 = __webpack_require__(22);
const registration_aadhaar_service_1 = __webpack_require__(31);
let RegistrationAadhaarModule = class RegistrationAadhaarModule {
};
RegistrationAadhaarModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'ABHA-SERVICES',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        port: 8081
                    }
                }
            ])
        ],
        controllers: [registration_aadhaar_controller_1.RegistrationAadhaarController],
        providers: [registration_aadhaar_service_1.RegistrationAadhaarService]
    })
], RegistrationAadhaarModule);
exports.RegistrationAadhaarModule = RegistrationAadhaarModule;


/***/ }),
/* 22 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationAadhaarController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const generateOtpRequest_dto_1 = __webpack_require__(23);
const generateOtpResponse_dto_1 = __webpack_require__(24);
const verifyOtpRequest_dto_1 = __webpack_require__(25);
const verifyOtpResponse_dto_1 = __webpack_require__(26);
const generateMobileOtpRequest_dto_1 = __webpack_require__(27);
const generateMobileOtpResponse_dto_1 = __webpack_require__(28);
const createHealthIdPreVerifiedRequest_dto_1 = __webpack_require__(29);
const createHealthIdPreVerifiedResponse_dto_1 = __webpack_require__(30);
const registration_aadhaar_service_1 = __webpack_require__(31);
let RegistrationAadhaarController = class RegistrationAadhaarController {
    constructor(registrationAadhaarService) {
        this.registrationAadhaarService = registrationAadhaarService;
    }
    ;
    async generateOtp(body) {
        const res = await this.registrationAadhaarService.generateOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 422: throw new common_1.HttpException("Couldn\'t find registered mobile number to the given aadhaar", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async verifyOtp(body) {
        const res = await this.registrationAadhaarService.verifyOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 422: throw new common_1.HttpException("OTP entered is incorrect", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async generateMobileOtp(body) {
        const res = await this.registrationAadhaarService.generateMobileOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 422: throw new common_1.HttpException("Mobile number may not register", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async verifyMobileOtp(body) {
        const res = await this.registrationAadhaarService.verifyMobileOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 422: throw new common_1.HttpException("OTP entered is incorrect", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async createHealthId(body) {
        const res = await this.registrationAadhaarService.createHealthIdPreverified(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 422: throw new common_1.HttpException("Couldn't find account for given Aadhaar/Mobile", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
};
__decorate([
    (0, common_1.Post)('generateOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Send OTP to given aadhaar', tags: ['Registration through aadhaar'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: generateOtpResponse_dto_1.GenerateOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Couldn\'t find registered mobile number to the given aadhaar' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof generateOtpRequest_dto_1.GenerateOtpRequestDto !== "undefined" && generateOtpRequest_dto_1.GenerateOtpRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], RegistrationAadhaarController.prototype, "generateOtp", null);
__decorate([
    (0, common_1.Post)('verifyOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify OTP sent to aadhaar', tags: ['Registration through aadhaar'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: verifyOtpResponse_dto_1.VerifyOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'OTP entered is incorrect' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof verifyOtpRequest_dto_1.VerifyOtpRequestDto !== "undefined" && verifyOtpRequest_dto_1.VerifyOtpRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], RegistrationAadhaarController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Post)('generateMobileOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Send OTP to given mobile number', tags: ['Registration through aadhaar'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: generateMobileOtpResponse_dto_1.GenerateMobileOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Mobile number may not register' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof generateMobileOtpRequest_dto_1.GenerateMobileOtpRequestDto !== "undefined" && generateMobileOtpRequest_dto_1.GenerateMobileOtpRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], RegistrationAadhaarController.prototype, "generateMobileOtp", null);
__decorate([
    (0, common_1.Post)('verifyMobileOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify OTP sent to mobile number', tags: ['Registration through aadhaar'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: verifyOtpResponse_dto_1.VerifyOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'OTP entered is incorrect' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof verifyOtpRequest_dto_1.VerifyOtpRequestDto !== "undefined" && verifyOtpRequest_dto_1.VerifyOtpRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], RegistrationAadhaarController.prototype, "verifyMobileOtp", null);
__decorate([
    (0, common_1.Post)('createHealthId'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify OTP sent to mobile number', tags: ['Registration through aadhaar'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: createHealthIdPreVerifiedResponse_dto_1.CreateHealthIdPreVerifiedResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Could not find Account for given Aadhaar/Mobile' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof createHealthIdPreVerifiedRequest_dto_1.CreateHealthIdPreVerifiedRequestDto !== "undefined" && createHealthIdPreVerifiedRequest_dto_1.CreateHealthIdPreVerifiedRequestDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], RegistrationAadhaarController.prototype, "createHealthId", null);
RegistrationAadhaarController = __decorate([
    (0, common_1.Controller)('registration/aadhaar'),
    __metadata("design:paramtypes", [typeof (_a = typeof registration_aadhaar_service_1.RegistrationAadhaarService !== "undefined" && registration_aadhaar_service_1.RegistrationAadhaarService) === "function" ? _a : Object])
], RegistrationAadhaarController);
exports.RegistrationAadhaarController = RegistrationAadhaarController;


/***/ }),
/* 23 */
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
exports.GenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class GenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', default: '278623899118' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateOtpRequestDto.prototype, "aadhaar", void 0);
exports.GenerateOtpRequestDto = GenerateOtpRequestDto;


/***/ }),
/* 24 */
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
exports.GenerateOtpResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class GenerateOtpResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '35a8ea27-1252-4d3a-b568-4a634ffa5071' }),
    __metadata("design:type", String)
], GenerateOtpResponseDto.prototype, "txnId", void 0);
exports.GenerateOtpResponseDto = GenerateOtpResponseDto;


/***/ }),
/* 25 */
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
exports.VerifyOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class VerifyOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '35a8ea27-1252-4d3a-b568-4a634ffa5071' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOtpRequestDto.prototype, "txnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '110220' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOtpRequestDto.prototype, "otp", void 0);
exports.VerifyOtpRequestDto = VerifyOtpRequestDto;


/***/ }),
/* 26 */
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
exports.VerifyOtpResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class VerifyOtpResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'a825f76b-0696-40f3-864c-5a3a5b389a83' }),
    __metadata("design:type", String)
], VerifyOtpResponseDto.prototype, "txnId", void 0);
exports.VerifyOtpResponseDto = VerifyOtpResponseDto;


/***/ }),
/* 27 */
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
exports.GenerateMobileOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class GenerateMobileOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', default: 'a825f76b-0696-40f3-864c-5a3a5b389a83' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateMobileOtpRequestDto.prototype, "txnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', default: '9377612136' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateMobileOtpRequestDto.prototype, "mobile", void 0);
exports.GenerateMobileOtpRequestDto = GenerateMobileOtpRequestDto;


/***/ }),
/* 28 */
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
exports.GenerateMobileOtpResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class GenerateMobileOtpResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '35a8ea27-1252-4d3a-b568-4a634ffa5071' }),
    __metadata("design:type", String)
], GenerateMobileOtpResponseDto.prototype, "txnId", void 0);
exports.GenerateMobileOtpResponseDto = GenerateMobileOtpResponseDto;


/***/ }),
/* 29 */
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
exports.CreateHealthIdPreVerifiedRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class CreateHealthIdPreVerifiedRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "a825f76b-0696-40f3-864c-5a3a5b389a83" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedRequestDto.prototype, "txnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "deepak.pant" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedRequestDto.prototype, "healthId", void 0);
exports.CreateHealthIdPreVerifiedRequestDto = CreateHealthIdPreVerifiedRequestDto;


/***/ }),
/* 30 */
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
exports.CreateHealthIdPreVerifiedResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class CreateHealthIdPreVerifiedResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1Z2dnQHNieCIsImNsaWVudElkIjoiUEhSLVdFQiIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsImV4cCI6MTY3MzIwMjYwOCwiaWF0IjoxNjczMTk1NDA4LCJwaHJBZGRyZXNzIjoic2hpdmFtMTQxNWdnZ0BzYngifQ.KXDYpfM33GFA2kLVfTUsrARi-sIyGlHz2gvNlTt8WrfvMFuzkIy7jM4f7JC9NAI9Jc0YOcflD2l_qVGRE99XSsbYJAJvGy8-3STBfa0aIJygO2TmAGB_Q-TBgeHgLsJzDUii3xazJXO45J7ZA3_2edt8d6vOGjLb1yatcshd6BCJQvAb9U5-Wy44lwvOXJ_B9JKCSNH9XXqJaxXE4RC-lCRruHp1dfRbJfWjrLIeo_0Sp3V73ccsG0Xd65XNIm_gAgF9i_08LqH7wOF1CnCmhoF9mSdCHHO2Ol3i_kinp4KCYPrEc_R0grDOYQBib383CBZVqpCJfA40ZPRkk5_uwg" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1Z2dnQHNieCIsImNsaWVudElkIjoiUEhSLVdFQiIsInN5c3RlbSI6IkFCSEEtQSIsInR5cCI6IlJlZnJlc2giLCJleHAiOjE2NzQ0OTE0MDgsImlhdCI6MTY3MzE5NTQwOH0.LAFDLosImyk5rAJYJlsbfYlxLtaHxqafVkS8VKJ5vrOLXdQi7iLrS9po4O-wc0ITsnWAkqzPrCQYYVVx-km8NPf9IWkRWmqmYEoc-42WNXMepYsSb1ZxFJYL5wgCCc_NZ5oETrg7Jz-WkRVQtsWnC__KlqJFzjZPWNB9jtzSkrkZUBuwPbXY65LiRZVyZSRJLWQv1D-TLsZhIHfDJmcEEh7IYTl3uSX5Pmi8dXO277QGw2VF0ObpIEPwis1jc5OnoLQOlcfFVLI8vvaDVngEizmxx2d5COjp1yFIBMSH7VhfzunPDmR2OFRpI5rwgmw7asGm9IY4eJozVS7cI2zk2A" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '43-4221-5105-6749' }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "healthIdNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "M" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "200" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "yearOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "6" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "monthOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "2" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "dayOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Hi" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "middleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "27" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "401" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "districtCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "MAHARASHTRA" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "stateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "Pune" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "districtName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCQkJCQoLCwoODw0PDhQSERESFB4WFxYXFh4uHSEdHSEdLikxKCUoMSlJOTMzOUlUR0NHVGZbW2aBeoGoqOIBCQkJCQkJCgsLCg4PDQ8OFBIRERIUHhYXFhcWHi4dIR0dIR0uKTEoJSgxKUk5MzM5SVRHQ0dUZltbZoF6gaio4v/CABEIBLAHgAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//aAAgBAQAAAADwawLpMspcK7qrlE5F0Vtul2bVywMUNeBHUkW/bmxvYELGuNjh2VDvixxo5ViljKjDRMoahCULjs2JCShjhjh2OGxo0Y2MoXHOLszsKLhw7tD99mpZQxj8xceofmLEKFwXLTIyHwY1Ls+iEotjHY0M0pjRYxtGj4VFKLPohQlFQyy4Qipc0XG9pS+CP/2Q==" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "kycPhoto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "profilePhoto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "9545812125" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["DEMOGRAPHICS", "AADHAAR_BIO", "AADHAAR_OTP", "MOBILE_OTP"] }),
    __metadata("design:type", Array)
], CreateHealthIdPreVerifiedResponseDto.prototype, "authMethods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "395002" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "pincode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "null" }),
    __metadata("design:type", String)
], CreateHealthIdPreVerifiedResponseDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    __metadata("design:type", Boolean)
], CreateHealthIdPreVerifiedResponseDto.prototype, "new", void 0);
exports.CreateHealthIdPreVerifiedResponseDto = CreateHealthIdPreVerifiedResponseDto;


/***/ }),
/* 31 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationAadhaarService = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const rxjs_1 = __webpack_require__(18);
let RegistrationAadhaarService = class RegistrationAadhaarService {
    constructor(abhaClient) {
        this.abhaClient = abhaClient;
    }
    async generateOtp(body) {
        const response = (0, rxjs_1.lastValueFrom)(this.abhaClient.send('generateAadhaarOtp', body));
        console.log(response);
        return response;
    }
    async verifyOtp(body) {
        const response = (0, rxjs_1.lastValueFrom)(this.abhaClient.send('verifyAadhaarOtp', body));
        console.log(response);
        return response;
    }
    async generateMobileOtp(body) {
        const response = (0, rxjs_1.lastValueFrom)(this.abhaClient.send('generateAadhaarMobileOtp', body));
        console.log(response);
        return response;
    }
    async verifyMobileOtp(body) {
        const response = (0, rxjs_1.lastValueFrom)(this.abhaClient.send('verifyAadhaarMobileOtp', body));
        console.log(response);
        return response;
    }
    async createHealthIdPreverified(body) {
        const response = (0, rxjs_1.lastValueFrom)(this.abhaClient.send('createHealthIdPreverified', body));
        console.log(response);
        return response;
    }
};
RegistrationAadhaarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ABHA-SERVICES')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], RegistrationAadhaarService);
exports.RegistrationAadhaarService = RegistrationAadhaarService;


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginModule = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const login_controller_1 = __webpack_require__(35);
const login_service_1 = __webpack_require__(43);
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'ABHA-SERVICES',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        port: 8081
                    }
                }
            ])
        ],
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService]
    })
], LoginModule);
exports.LoginModule = LoginModule;


/***/ }),
/* 35 */
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const verifyOtpRequest_dto_1 = __webpack_require__(25);
const loginAbhaIdGenerateOtpRequest_dto_1 = __webpack_require__(36);
const loginAbhaNumberGenerateOtpRequest_dto_1 = __webpack_require__(37);
const loginMobileConfirmRequest_dto_1 = __webpack_require__(38);
const loginMobileConfirmResponse_dto_1 = __webpack_require__(39);
const loginMobileGenerateOtpRequest_dto_1 = __webpack_require__(40);
const loginMobileGenerateOtpResponse_dto_1 = __webpack_require__(41);
const loginMobileVerifyOtpResponse_dto_1 = __webpack_require__(42);
const login_service_1 = __webpack_require__(43);
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    async generateMobileOtp(body) {
        const res = await this.loginService.loginMobileGenerateOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Enter correct phone number", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('Couldn\'t generate OTP', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async verifyMobileOtp(body) {
        const res = await this.loginService.loginMobileVerifyOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('OTP wrong/expired', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async confirm(body) {
        const res = await this.loginService.loginMobileConfirm(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('Invalid details', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async generateAbhaIdOtp(body) {
        const res = await this.loginService.loginAbhaIdGenerateOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Enter correct ABHA ID", common_1.HttpStatus.BAD_REQUEST);
                case 404: throw new common_1.HttpException("Enter valid ABHA ID", common_1.HttpStatus.NOT_FOUND);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('Couldn\'t generate OTP', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async verifyAbhaIdOtp(body) {
        const res = await this.loginService.loginAbhaIdVerifyOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('OTP wrong/expired', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async generateAbhaNumberOtp(body) {
        const res = await this.loginService.loginAbhaNumberGenerateOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Enter correct ABHA ID", common_1.HttpStatus.BAD_REQUEST);
                case 404: throw new common_1.HttpException("Enter valid ABHA Number", common_1.HttpStatus.NOT_FOUND);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('Couldn\'t generate OTP', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async verifyAbhaNumberOtp(body) {
        const res = await this.loginService.loginAbhaNumberVerifyOtp(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('OTP wrong/expired', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
};
__decorate([
    (0, common_1.Post)('/mobile/generateOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Send OTP to given mobile number', tags: ['Login'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: loginMobileGenerateOtpResponse_dto_1.LoginMobileGenerateOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Couldn\'t generate OTP' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof loginMobileGenerateOtpRequest_dto_1.LoginMobileGenerateOtpRequestDto !== "undefined" && loginMobileGenerateOtpRequest_dto_1.LoginMobileGenerateOtpRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "generateMobileOtp", null);
__decorate([
    (0, common_1.Post)('/mobile/verifyOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify OTP given to mobile number', tags: ['Login'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: loginMobileVerifyOtpResponse_dto_1.LoginMobileVerifyOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'OTP wrong/expired' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof verifyOtpRequest_dto_1.VerifyOtpRequestDto !== "undefined" && verifyOtpRequest_dto_1.VerifyOtpRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "verifyMobileOtp", null);
__decorate([
    (0, common_1.Post)('/mobile/confirm'),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm login', tags: ['Login'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: loginMobileConfirmResponse_dto_1.LoginMobileConfirmResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Invalid details' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof loginMobileConfirmRequest_dto_1.LoginMobileConfirmRequestDto !== "undefined" && loginMobileConfirmRequest_dto_1.LoginMobileConfirmRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)('/healthId/generateOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Send OTP to mobile number associated with given healthId', tags: ['Login'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: loginMobileGenerateOtpResponse_dto_1.LoginMobileGenerateOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Enter valid ABHA ID' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Couldn\'t generate OTP' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof loginAbhaIdGenerateOtpRequest_dto_1.LoginAbhaIdGenerateOtpRequestDto !== "undefined" && loginAbhaIdGenerateOtpRequest_dto_1.LoginAbhaIdGenerateOtpRequestDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "generateAbhaIdOtp", null);
__decorate([
    (0, common_1.Post)('/healthId/verifyOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify OTP given to mobile number associated with healthId', tags: ['Login'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: loginMobileConfirmResponse_dto_1.LoginMobileConfirmResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'OTP wrong/expired' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof verifyOtpRequest_dto_1.VerifyOtpRequestDto !== "undefined" && verifyOtpRequest_dto_1.VerifyOtpRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "verifyAbhaIdOtp", null);
__decorate([
    (0, common_1.Post)('/healthNumber/generateOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Send OTP to mobile number associated with given healthId', tags: ['Login'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: loginMobileGenerateOtpResponse_dto_1.LoginMobileGenerateOtpResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Enter valid Aadhaar number' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Couldn\'t generate OTP' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof loginAbhaNumberGenerateOtpRequest_dto_1.LoginAbhaNumberGenerateOtpRequestDto !== "undefined" && loginAbhaNumberGenerateOtpRequest_dto_1.LoginAbhaNumberGenerateOtpRequestDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "generateAbhaNumberOtp", null);
__decorate([
    (0, common_1.Post)('/healthNumber/verifyOtp'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify OTP given to mobile number associated with healthId', tags: ['Login'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: loginMobileConfirmResponse_dto_1.LoginMobileConfirmResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'OTP wrong/expired' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof verifyOtpRequest_dto_1.VerifyOtpRequestDto !== "undefined" && verifyOtpRequest_dto_1.VerifyOtpRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "verifyAbhaNumberOtp", null);
LoginController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" ? _a : Object])
], LoginController);
exports.LoginController = LoginController;


/***/ }),
/* 36 */
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
exports.LoginAbhaIdGenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class LoginAbhaIdGenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam1415@sbx' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginAbhaIdGenerateOtpRequestDto.prototype, "abhaId", void 0);
exports.LoginAbhaIdGenerateOtpRequestDto = LoginAbhaIdGenerateOtpRequestDto;


/***/ }),
/* 37 */
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
exports.LoginAbhaNumberGenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class LoginAbhaNumberGenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '43-4221-5105-6749' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginAbhaNumberGenerateOtpRequestDto.prototype, "abhaNumber", void 0);
exports.LoginAbhaNumberGenerateOtpRequestDto = LoginAbhaNumberGenerateOtpRequestDto;


/***/ }),
/* 38 */
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
exports.LoginMobileConfirmRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class LoginMobileConfirmRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam1415@sbx' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileConfirmRequestDto.prototype, "patientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '21bf803e-aa3b-4dbf-b1c8-1620287c1996' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileConfirmRequestDto.prototype, "txnId", void 0);
exports.LoginMobileConfirmRequestDto = LoginMobileConfirmRequestDto;


/***/ }),
/* 39 */
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
exports.LoginMobileConfirmResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class LoginMobileConfirmResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam1415@sbx' }),
    __metadata("design:type", String)
], LoginMobileConfirmResponseDto.prototype, "phrAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Bearer eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1QHNieCIsImNsaWVudElkIjoiU0JYXzAwMjI1NCIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsInBock1vYmlsZSI6IjkzNzc2MTIxMzYiLCJleHAiOjE2NzM5OTUzNDEsImlhdCI6MTY3Mzk4ODE0MSwicGhyQWRkcmVzcyI6InNoaXZhbTE0MTVAc2J4IiwidHhuSWQiOiIyMWJmODAzZS1hYTNiLTRkYmYtYjFjOC0xNjIwMjg3YzE5OTYifQ.4cxrS68oaambArRws2Z_v0sdEQNSH6iB6n4qJx7Op529y_659gwTb4I9HJ8GEg1O-BXExE7P75PZs1WbexoWTPFj-VVO33_fZJJxIffk-MHuM5AJvGtzVi_q2pW7J1MEWaII8faFu0-F1W2axCAFc3lAsqebWTCufnbsyVHd78kTYvdPDmTXzn8IgL5r8xPV5k42tqKBvPu1V96qjZA5O9OeXUat-LtbIqX3wBiKSaRBiyFy7NbGe1JgN3XdzqtIwesMS7B7r-e708ZOnCNoBFIMbxifT3TRcwS2KNurcHo0RSxUSsdGur_3sFq6uX0EahriUoTSTRhW-sau-3cwvw' }),
    __metadata("design:type", String)
], LoginMobileConfirmResponseDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '7200' }),
    __metadata("design:type", String)
], LoginMobileConfirmResponseDto.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Bearer eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1QHNieCIsImNsaWVudElkIjoiU0JYXzAwMjI1NCIsInN5c3RlbSI6IkFCSEEtQSIsInR5cCI6IlJlZnJlc2giLCJleHAiOjE2NzUyODQxNDEsImlhdCI6MTY3Mzk4ODE0MX0.g5Znl8UR60l1tJSBvNJGH1aFEHkOfYt9NTD6ZFlFAut1UOgl1sQMObGaegrEOiXJeMW9w2Cnmk8lKbIGGe3xIh4l4YVzCaXZf-0um5UlTksinM9aTWeyQe2rsMoXJyaWAu2ho2v1pLQjkbGRx4OtHQ7NB1EMMJaDjBEVBSw3IcqLlY6oGmUOJkE1Gp-2q0E24wAakBSx7ximSiOLtDYOBzHWdWX2LvRlL0o7hn9FO--jln3FAlZAueXE7oekdyJaPulDl5IvrKyV3ZPnX_SlYuCvYzrVedkxvN8CW8rkomn0brxk6qONyY_YXGNbzYXXPB3U31YWQYOxy9811bG5jw' }),
    __metadata("design:type", String)
], LoginMobileConfirmResponseDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1296000' }),
    __metadata("design:type", String)
], LoginMobileConfirmResponseDto.prototype, "refreshExpiresIn", void 0);
exports.LoginMobileConfirmResponseDto = LoginMobileConfirmResponseDto;


/***/ }),
/* 40 */
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
exports.LoginMobileGenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class LoginMobileGenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '9377612136' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileGenerateOtpRequestDto.prototype, "mobile", void 0);
exports.LoginMobileGenerateOtpRequestDto = LoginMobileGenerateOtpRequestDto;


/***/ }),
/* 41 */
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
exports.LoginMobileGenerateOtpResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class LoginMobileGenerateOtpResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1431fa4f-82b4-4cba-bdc0-770e9178f644' }),
    __metadata("design:type", String)
], LoginMobileGenerateOtpResponseDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'IN041XX' }),
    __metadata("design:type", String)
], LoginMobileGenerateOtpResponseDto.prototype, "requesterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'MOBILE_OTP' }),
    __metadata("design:type", String)
], LoginMobileGenerateOtpResponseDto.prototype, "authMode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], LoginMobileGenerateOtpResponseDto.prototype, "error", void 0);
exports.LoginMobileGenerateOtpResponseDto = LoginMobileGenerateOtpResponseDto;


/***/ }),
/* 42 */
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
exports.LoginMobileVerifyOtpResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class LoginMobileVerifyOtpResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '21bf803e-aa3b-4dbf-b1c8-1620287c1996' }),
    __metadata("design:type", String)
], LoginMobileVerifyOtpResponseDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'phr_001' }),
    __metadata("design:type", String)
], LoginMobileVerifyOtpResponseDto.prototype, "requesterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '9377612136' }),
    __metadata("design:type", String)
], LoginMobileVerifyOtpResponseDto.prototype, "mobileEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: [
            "shivam141511@sbx",
            "shivam1415@sbx",
            "shivam1415gg@sbx",
            "helloshivam212@sbx"
        ]
    }),
    __metadata("design:type", Array)
], LoginMobileVerifyOtpResponseDto.prototype, "mappedPhrAddress", void 0);
exports.LoginMobileVerifyOtpResponseDto = LoginMobileVerifyOtpResponseDto;


/***/ }),
/* 43 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginService = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const rxjs_1 = __webpack_require__(18);
let LoginService = class LoginService {
    constructor(abhaClient) {
        this.abhaClient = abhaClient;
    }
    async loginMobileGenerateOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('loginMobileGenerateOtp', body));
        console.log(response);
        return response;
    }
    async loginMobileVerifyOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('loginMobileVerifyOtp', body));
        console.log(response);
        return response;
    }
    async loginMobileConfirm(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('loginMobileConfirm', body));
        console.log(response);
        return response;
    }
    async loginAbhaIdGenerateOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('loginAbhaIdGenerateOtp', body));
        console.log(response);
        return response;
    }
    async loginAbhaIdVerifyOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('loginAbhaIdVerifyOtp', body));
        console.log(response);
        return response;
    }
    async loginAbhaNumberGenerateOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('loginAbhaNumberGenerateOtp', body));
        console.log(response);
        return response;
    }
    async loginAbhaNumberVerifyOtp(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('loginAbhaNumberVerifyOtp', body));
        console.log(response);
        return response;
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ABHA-SERVICES')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], LoginService);
exports.LoginService = LoginService;


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileModule = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const profile_controller_1 = __webpack_require__(45);
const profile_service_1 = __webpack_require__(50);
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'ABHA-SERVICES',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        port: 8081
                    }
                }
            ])
        ],
        controllers: [profile_controller_1.ProfileController],
        providers: [profile_service_1.ProfileService]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),
/* 45 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileController = exports.refreshTokenParams = exports.tokenParams = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
const findProviderByIdRequest_dto_1 = __webpack_require__(46);
const findProviderByIdResponse_dto_1 = __webpack_require__(47);
const profileShareRequest_dto_1 = __webpack_require__(48);
const profileShareResponse_dto_1 = __webpack_require__(49);
const profile_service_1 = __webpack_require__(50);
class tokenParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], tokenParams.prototype, "token", void 0);
exports.tokenParams = tokenParams;
class refreshTokenParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], refreshTokenParams.prototype, "refreshToken", void 0);
exports.refreshTokenParams = refreshTokenParams;
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async getProfile(params) {
        const res = await this.profileService.getProfile(params.token);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 401: throw new common_1.HttpException('Unauthorized access', common_1.HttpStatus.UNAUTHORIZED);
                case 422: throw new common_1.HttpException('Invalid Request data', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async getQrCode(params) {
        const res = await this.profileService.getQrCode(params.token);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 401: throw new common_1.HttpException('Unauthorized access', common_1.HttpStatus.UNAUTHORIZED);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('Invalid Request data', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async refreshToken(params) {
        const res = await this.profileService.refreshToken(params.refreshToken);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 401: throw new common_1.HttpException('Unauthorized access', common_1.HttpStatus.UNAUTHORIZED);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                case 422: throw new common_1.HttpException('Invalid Request data', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async findProviderById(body) {
        const res = await this.profileService.findProviderById(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
    async profileShare(body) {
        const res = await this.profileService.profileShare(body);
        if (res["error"]) {
            switch (res["error"]["status"]) {
                case 400: throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
                case 504: throw new common_1.HttpException("Gateway timeout. Try again", common_1.HttpStatus.GATEWAY_TIMEOUT);
                case 500: throw new common_1.HttpException('Error connecting to NDHM server', common_1.HttpStatus.MISDIRECTED);
                default: throw new common_1.HttpException("Unknown error occured", common_1.HttpStatus.NOT_FOUND);
            }
        }
        else {
            return res;
        }
    }
};
__decorate([
    (0, common_1.Get)(':token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get profile details', tags: ['Profile'] }),
    (0, swagger_1.ApiParam)({ name: 'token', required: true, schema: { type: 'string' } }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Invalid Request data' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tokenParams]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('qrCode/:token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get QR code for profile details (Image sent is a base64 encoded string)', tags: ['Profile'] }),
    (0, swagger_1.ApiParam)({ name: 'token', required: true, schema: { type: 'string' } }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Invalid Request data' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tokenParams]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getQrCode", null);
__decorate([
    (0, common_1.Get)('refreshToken/:refreshToken'),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh token for user', tags: ['Profile'] }),
    (0, swagger_1.ApiParam)({ name: 'refreshToken', required: true, schema: { type: 'string' } }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Invalid Request data' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refreshTokenParams]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('/findProviderById'),
    (0, swagger_1.ApiOperation)({ summary: 'Find Provider by HIP ID', tags: ['Profile'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: findProviderByIdResponse_dto_1.FindProviderByIdResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof findProviderByIdRequest_dto_1.FindProviderByIdRequestDto !== "undefined" && findProviderByIdRequest_dto_1.FindProviderByIdRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "findProviderById", null);
__decorate([
    (0, common_1.Post)('/profileShare'),
    (0, swagger_1.ApiOperation)({ summary: 'Share Patient profile to HIP ID', tags: ['Profile'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK', type: profileShareResponse_dto_1.ProfileShareResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway timeout. Try again' }),
    (0, swagger_1.ApiResponse)({ status: 421, description: 'Error connecting to NDHM server.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof profileShareRequest_dto_1.ProfileShareRequestDto !== "undefined" && profileShareRequest_dto_1.ProfileShareRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "profileShare", null);
ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [typeof (_a = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" ? _a : Object])
], ProfileController);
exports.ProfileController = ProfileController;


/***/ }),
/* 46 */
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
exports.FindProviderByIdRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class FindProviderByIdRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1QHNieCIsImNsaWVudElkIjoiU0JYXzAwMjI1NCIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsInBock1vYmlsZSI6IjkzNzc2MTIxMzYiLCJleHAiOjE2NzYwMTI3MjksImlhdCI6MTY3NjAwNTUyOSwicGhyQWRkcmVzcyI6InNoaXZhbTE0MTVAc2J4IiwidHhuSWQiOiI4NWY5MTg3Mi1hYTI5LTQwOWItYWE0My1hOTNhNTlkMjAzNzQifQ.1YXb7PAR8io-qkZBXe8gwB5j72M536aS73vtZBsrmgp1UVJkQ09TV3TS-8vjF5zj3NlJVVNIoI0zsho2MdIr9seeKi7N2HmI_et5gym-pYniBeNeEAMUbSj0z_M2zX2Q8GGitpsq1EYexmq8vSyRPbYmqudjH2OaJFs7W8eNc1sZBnMAlSW9ynMZEU8ec_FLTh7Vp7Jj_pOFo45RVS88wecsf9jtcop90k9yoEd0PXwPCU7atmAmUSVYSs0dMU0Sv4wKf710p0MWK_PDHldz07LZix35o-9QXSESKOFfLFWGj7-rVZ08_X_yOFk4PyWFh-joo3k3n5bwXMs3fAQUxw" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindProviderByIdRequestDto.prototype, "userToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "IN3410000260" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindProviderByIdRequestDto.prototype, "hipId", void 0);
exports.FindProviderByIdRequestDto = FindProviderByIdRequestDto;


/***/ }),
/* 47 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindProviderByIdResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class FindProviderByIdResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: {
            "name": "Shristi Hospital",
            "id": "IN3410000260"
        } }),
    __metadata("design:type", typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object)
], FindProviderByIdResponseDto.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "telephone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "districtCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "pinCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], FindProviderByIdResponseDto.prototype, "facilityType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    __metadata("design:type", Boolean)
], FindProviderByIdResponseDto.prototype, "isHIP", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", String)
], FindProviderByIdResponseDto.prototype, "attributes", void 0);
exports.FindProviderByIdResponseDto = FindProviderByIdResponseDto;


/***/ }),
/* 48 */
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
exports.ProfileShareRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class ProfileShareRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "IN3410000286" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileShareRequestDto.prototype, "hipId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "12345" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileShareRequestDto.prototype, "counter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1QHNieCIsImNsaWVudElkIjoiU0JYXzAwMjI1NCIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsInBock1vYmlsZSI6IjkzNzc2MTIxMzYiLCJleHAiOjE2NzYwMTI3MjksImlhdCI6MTY3NjAwNTUyOSwicGhyQWRkcmVzcyI6InNoaXZhbTE0MTVAc2J4IiwidHhuSWQiOiI4NWY5MTg3Mi1hYTI5LTQwOWItYWE0My1hOTNhNTlkMjAzNzQifQ.1YXb7PAR8io-qkZBXe8gwB5j72M536aS73vtZBsrmgp1UVJkQ09TV3TS-8vjF5zj3NlJVVNIoI0zsho2MdIr9seeKi7N2HmI_et5gym-pYniBeNeEAMUbSj0z_M2zX2Q8GGitpsq1EYexmq8vSyRPbYmqudjH2OaJFs7W8eNc1sZBnMAlSW9ynMZEU8ec_FLTh7Vp7Jj_pOFo45RVS88wecsf9jtcop90k9yoEd0PXwPCU7atmAmUSVYSs0dMU0Sv4wKf710p0MWK_PDHldz07LZix35o-9QXSESKOFfLFWGj7-rVZ08_X_yOFk4PyWFh-joo3k3n5bwXMs3fAQUxw" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileShareRequestDto.prototype, "userToken", void 0);
exports.ProfileShareRequestDto = ProfileShareRequestDto;


/***/ }),
/* 49 */
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
exports.ProfileShareResponseDto = void 0;
const swagger_1 = __webpack_require__(2);
class ProfileShareResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "SUCCESS" }),
    __metadata("design:type", String)
], ProfileShareResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "shivam1415@sbx" }),
    __metadata("design:type", String)
], ProfileShareResponseDto.prototype, "healthId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "39" }),
    __metadata("design:type", String)
], ProfileShareResponseDto.prototype, "tokenNumber", void 0);
exports.ProfileShareResponseDto = ProfileShareResponseDto;


/***/ }),
/* 50 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileService = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const rxjs_1 = __webpack_require__(18);
let ProfileService = class ProfileService {
    constructor(abhaClient) {
        this.abhaClient = abhaClient;
    }
    async getProfile(token) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('profile', token));
        console.log(response);
        return response;
    }
    async getQrCode(token) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('qrCode', token));
        console.log(response);
        return response;
    }
    async refreshToken(refreshToken) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('refreshToken', refreshToken));
        console.log(response);
        return response;
    }
    async findProviderById(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('findProviderById', body));
        console.log(response);
        return response;
    }
    async profileShare(body) {
        const response = await (0, rxjs_1.lastValueFrom)(this.abhaClient.send('profileShare', body));
        console.log(response);
        return response;
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ABHA-SERVICES')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(4);
const user_service_1 = __webpack_require__(52);
const user_controller_1 = __webpack_require__(53);
const microservices_1 = __webpack_require__(8);
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER-SERVICES',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        port: 8082
                    }
                }
            ])
        ],
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController]
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),
/* 52 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(8);
const rxjs_1 = __webpack_require__(18);
let UserService = class UserService {
    constructor(userClient) {
        this.userClient = userClient;
    }
    async createUser(body) {
        const response = (0, rxjs_1.lastValueFrom)(this.userClient.send('createUser', body));
        console.log(response);
        return response;
    }
    async updateUser(body) {
        const response = (0, rxjs_1.lastValueFrom)(this.userClient.send('updateUser', body));
        console.log(response);
        return response;
    }
    async findByMobile(mobile) {
        const response = (0, rxjs_1.lastValueFrom)(this.userClient.send('findByMobile', mobile));
        console.log(response);
        return response;
    }
    async findById(id) {
        const response = (0, rxjs_1.lastValueFrom)(this.userClient.send('findById', id));
        console.log(response);
        return response;
    }
    async deleteUser(id) {
        const response = (0, rxjs_1.lastValueFrom)(this.userClient.send('deleteUser', id));
        console.log(response);
        return response;
    }
    async findAll() {
        const response = (0, rxjs_1.lastValueFrom)(this.userClient.send('findAll', {}));
        console.log(response);
        return response;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER-SERVICES')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),
/* 53 */
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const createUserRequest_dto_1 = __webpack_require__(54);
const findByIdRequest_dto_1 = __webpack_require__(55);
const findByMobileRequest_dto_1 = __webpack_require__(56);
const updateUserRequest_dto_1 = __webpack_require__(57);
const user_service_1 = __webpack_require__(52);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(body) {
        const res = await this.userService.createUser(body);
        console.log(res);
        return res;
    }
    async updateUser(body) {
        const res = await this.userService.updateUser(body);
        console.log(res);
        return res;
    }
    async findByMobile(body) {
        const res = await this.userService.findByMobile(body.mobile);
        console.log(res);
        if (res) {
            return res;
        }
        else {
            return {};
        }
    }
    async findById(body) {
        const res = await this.userService.findById(body.id);
        console.log(res);
        if (res) {
            return res;
        }
        else {
            return {};
        }
    }
    async deleteUser(body) {
        const res = await this.userService.deleteUser(body.id);
        console.log(res);
        if (res) {
            return res;
        }
        else {
            return {};
        }
    }
    async findAll() {
        const res = await this.userService.findAll();
        console.log(res);
        if (res) {
            return res;
        }
        else {
            return {};
        }
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create user in Parchaa database', tags: ['User'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof createUserRequest_dto_1.CreateUserRequestDto !== "undefined" && createUserRequest_dto_1.CreateUserRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user in Parchaa database', tags: ['User'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof updateUserRequest_dto_1.UpdateUserRequestDto !== "undefined" && updateUserRequest_dto_1.UpdateUserRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Post)('findByMobile'),
    (0, swagger_1.ApiOperation)({ summary: 'Find user by mobile in Parchaa database', tags: ['User'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof findByMobileRequest_dto_1.FindByMobileRequestDto !== "undefined" && findByMobileRequest_dto_1.FindByMobileRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByMobile", null);
__decorate([
    (0, common_1.Post)('findById'),
    (0, swagger_1.ApiOperation)({ summary: 'Find user by ID in Parchaa database', tags: ['User'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof findByIdRequest_dto_1.FindByIdRequestDto !== "undefined" && findByIdRequest_dto_1.FindByIdRequestDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by ID in Parchaa database', tags: ['User'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof findByIdRequest_dto_1.FindByIdRequestDto !== "undefined" && findByIdRequest_dto_1.FindByIdRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('findAll'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all users in Parchaa database', tags: ['User'] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unknown error occured' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),
/* 54 */
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
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
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
/* 55 */
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
exports.FindByIdRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class FindByIdRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindByIdRequestDto.prototype, "id", void 0);
exports.FindByIdRequestDto = FindByIdRequestDto;


/***/ }),
/* 56 */
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
exports.FindByMobileRequestDto = void 0;
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
class FindByMobileRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "9377612136" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindByMobileRequestDto.prototype, "mobile", void 0);
exports.FindByMobileRequestDto = FindByMobileRequestDto;


/***/ }),
/* 57 */
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
const swagger_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(11);
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
const swagger_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Parchaa-NDHM')
        .setDescription('All the APIs required by Parchaa clients')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(1506);
    console.log("parchaa-ndhm-started");
}
bootstrap();

})();

/******/ })()
;