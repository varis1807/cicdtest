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
exports.AbhaServicesModule = void 0;
const axios_1 = __webpack_require__(4);
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const abha_services_controller_1 = __webpack_require__(7);
const abha_services_service_1 = __webpack_require__(8);
const registration_module_1 = __webpack_require__(9);
let AbhaServicesModule = class AbhaServicesModule {
};
AbhaServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            registration_module_1.RegistrationModule,
            axios_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            })
        ],
        controllers: [abha_services_controller_1.AbhaServicesController],
        providers: [abha_services_service_1.AbhaServicesService],
    })
], AbhaServicesModule);
exports.AbhaServicesModule = AbhaServicesModule;


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
exports.AbhaServicesController = void 0;
const common_1 = __webpack_require__(5);
const abha_services_service_1 = __webpack_require__(8);
let AbhaServicesController = class AbhaServicesController {
    constructor(abhaServicesService) {
        this.abhaServicesService = abhaServicesService;
    }
    getHello() {
        return this.abhaServicesService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AbhaServicesController.prototype, "getHello", null);
AbhaServicesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof abha_services_service_1.AbhaServicesService !== "undefined" && abha_services_service_1.AbhaServicesService) === "function" ? _a : Object])
], AbhaServicesController);
exports.AbhaServicesController = AbhaServicesController;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbhaServicesService = void 0;
const common_1 = __webpack_require__(5);
let AbhaServicesService = class AbhaServicesService {
    getHello() {
        return 'Hello World!';
    }
};
AbhaServicesService = __decorate([
    (0, common_1.Injectable)()
], AbhaServicesService);
exports.AbhaServicesService = AbhaServicesService;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationModule = void 0;
const axios_1 = __webpack_require__(4);
const common_1 = __webpack_require__(5);
const registration_controller_1 = __webpack_require__(10);
const registration_service_1 = __webpack_require__(28);
let RegistrationModule = class RegistrationModule {
};
RegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule
        ],
        controllers: [registration_controller_1.RegistrationController],
        providers: [registration_service_1.RegistrationService]
    })
], RegistrationModule);
exports.RegistrationModule = RegistrationModule;


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationController = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(2);
const loginAbhaIdGenerateOtpRequest_dto_1 = __webpack_require__(11);
const loginAbhaNumberGenerateOtpRequest_dto_1 = __webpack_require__(14);
const loginMobileConfirmRequest_dto_1 = __webpack_require__(15);
const loginMobileGenerateOtpRequest_dto_1 = __webpack_require__(16);
const loginMobileVerifyOtpRequest_dto_1 = __webpack_require__(17);
const findProviderByIdRequest_dto_1 = __webpack_require__(18);
const profileShareRequest_dto_1 = __webpack_require__(19);
const createHealthIdPreVerifiedRequest_dto_1 = __webpack_require__(20);
const generateMobileOtpRequest_dto_1 = __webpack_require__(21);
const generateOtpRequest_dto_1 = __webpack_require__(22);
const verifyOtpRequest_dto_1 = __webpack_require__(23);
const createHealthIdRequest_dto_1 = __webpack_require__(24);
const existByHealthIdRequest_dto_1 = __webpack_require__(25);
const generateOtpMobileRequest_dto_1 = __webpack_require__(26);
const verifyOtpMobileRequest_dto_1 = __webpack_require__(27);
const registration_service_1 = __webpack_require__(28);
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    async generateMobileOtp(body) {
        return this.registrationService.generateMobileOtp(body);
    }
    async verifyMobileOtp(body) {
        return this.registrationService.verifyMobileOtp(body);
    }
    async createHealthId(body) {
        return this.registrationService.createHealthId(body);
    }
    async generateAadhaarOtp(body) {
        return this.registrationService.generateAadhaarOtp(body);
    }
    async verifyAaadhaarOtp(body) {
        return this.registrationService.verifyAadhaarOtp(body);
    }
    async generateAadhaarMobileOtp(body) {
        return this.registrationService.generateAadhaarMobileOtp(body);
    }
    async verifyAaadhaarMobileOtp(body) {
        return this.registrationService.verifyAadhaarMobileOtp(body);
    }
    async createHealthIdPreverified(body) {
        return this.registrationService.createHealthIdPreverified(body);
    }
    async existByHealthId(body) {
        return this.registrationService.existsByHealthId(body);
    }
    async loginMobileGenerateOtp(body) {
        return this.registrationService.loginMobileGenerateOtp(body);
    }
    async loginMobileVerifyOtp(body) {
        return this.registrationService.loginMobileVerifyOtp(body);
    }
    async loginMobileConfirm(body) {
        return this.registrationService.loginMobileConfirm(body);
    }
    async loginAbhaIdGenerateOtp(body) {
        return this.registrationService.loginAbhaIdGenerateOtp(body);
    }
    async loginAbhaIdVerifyOtp(body) {
        return this.registrationService.loginAbhaIdVerifyOtp(body);
    }
    async loginAbhaNumberGenerateOtp(body) {
        return this.registrationService.loginAbhaNumberGenerateOtp(body);
    }
    async loginAbhaNumberVerifyOtp(body) {
        return this.registrationService.loginAbhaNumberVerifyOtp(body);
    }
    async getProfile(token) {
        return this.registrationService.getProfile(token);
    }
    async getQrCode(token) {
        return this.registrationService.getQrCode(token);
    }
    async refreshToken(refreshToken) {
        return this.registrationService.refreshUserToken(refreshToken);
    }
    async findProviderById(body) {
        return this.registrationService.findProviderById(body);
    }
    async profileShare(body) {
        return this.registrationService.profileShare(body);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('generateMobileOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof generateOtpMobileRequest_dto_1.GenerateOtpMobileRequestDto !== "undefined" && generateOtpMobileRequest_dto_1.GenerateOtpMobileRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "generateMobileOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('verifyMobileOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof verifyOtpMobileRequest_dto_1.VerifyOtpMobileRequestDto !== "undefined" && verifyOtpMobileRequest_dto_1.VerifyOtpMobileRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "verifyMobileOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('createHealthId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof createHealthIdRequest_dto_1.CreateHealthIdRequestDto !== "undefined" && createHealthIdRequest_dto_1.CreateHealthIdRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "createHealthId", null);
__decorate([
    (0, microservices_1.MessagePattern)('generateAadhaarOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof generateOtpRequest_dto_1.GenerateOtpRequestDto !== "undefined" && generateOtpRequest_dto_1.GenerateOtpRequestDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "generateAadhaarOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('verifyAadhaarOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof verifyOtpRequest_dto_1.VerifyOtpRequestDto !== "undefined" && verifyOtpRequest_dto_1.VerifyOtpRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "verifyAaadhaarOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('generateAadhaarMobileOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof generateMobileOtpRequest_dto_1.GenerateMobileOtpRequestDto !== "undefined" && generateMobileOtpRequest_dto_1.GenerateMobileOtpRequestDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "generateAadhaarMobileOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('verifyAadhaarMobileOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof verifyOtpRequest_dto_1.VerifyOtpRequestDto !== "undefined" && verifyOtpRequest_dto_1.VerifyOtpRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "verifyAaadhaarMobileOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('createHealthIdPreverified'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof createHealthIdPreVerifiedRequest_dto_1.CreateHealthIdPreVerifiedRequestDto !== "undefined" && createHealthIdPreVerifiedRequest_dto_1.CreateHealthIdPreVerifiedRequestDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "createHealthIdPreverified", null);
__decorate([
    (0, microservices_1.MessagePattern)('existByHealthId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof existByHealthIdRequest_dto_1.ExistByHealthIdRequestDto !== "undefined" && existByHealthIdRequest_dto_1.ExistByHealthIdRequestDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "existByHealthId", null);
__decorate([
    (0, microservices_1.MessagePattern)('loginMobileGenerateOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof loginMobileGenerateOtpRequest_dto_1.LoginMobileGenerateOtpRequestDto !== "undefined" && loginMobileGenerateOtpRequest_dto_1.LoginMobileGenerateOtpRequestDto) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "loginMobileGenerateOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('loginMobileVerifyOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof loginMobileVerifyOtpRequest_dto_1.LoginMobileVerifyOtpRequestDto !== "undefined" && loginMobileVerifyOtpRequest_dto_1.LoginMobileVerifyOtpRequestDto) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "loginMobileVerifyOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('loginMobileConfirm'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof loginMobileConfirmRequest_dto_1.LoginMobileConfirmRequestDto !== "undefined" && loginMobileConfirmRequest_dto_1.LoginMobileConfirmRequestDto) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "loginMobileConfirm", null);
__decorate([
    (0, microservices_1.MessagePattern)('loginAbhaIdGenerateOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof loginAbhaIdGenerateOtpRequest_dto_1.LoginAbhaIdGenerateOtpRequestDto !== "undefined" && loginAbhaIdGenerateOtpRequest_dto_1.LoginAbhaIdGenerateOtpRequestDto) === "function" ? _p : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "loginAbhaIdGenerateOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('loginAbhaIdVerifyOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof loginMobileVerifyOtpRequest_dto_1.LoginMobileVerifyOtpRequestDto !== "undefined" && loginMobileVerifyOtpRequest_dto_1.LoginMobileVerifyOtpRequestDto) === "function" ? _q : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "loginAbhaIdVerifyOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('loginAbhaNumberGenerateOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof loginAbhaNumberGenerateOtpRequest_dto_1.LoginAbhaNumberGenerateOtpRequestDto !== "undefined" && loginAbhaNumberGenerateOtpRequest_dto_1.LoginAbhaNumberGenerateOtpRequestDto) === "function" ? _r : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "loginAbhaNumberGenerateOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('loginAbhaNumberVerifyOtp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof loginMobileVerifyOtpRequest_dto_1.LoginMobileVerifyOtpRequestDto !== "undefined" && loginMobileVerifyOtpRequest_dto_1.LoginMobileVerifyOtpRequestDto) === "function" ? _s : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "loginAbhaNumberVerifyOtp", null);
__decorate([
    (0, microservices_1.MessagePattern)('profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "getProfile", null);
__decorate([
    (0, microservices_1.MessagePattern)('qrCode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "getQrCode", null);
__decorate([
    (0, microservices_1.MessagePattern)('refreshToken'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "refreshToken", null);
__decorate([
    (0, microservices_1.MessagePattern)('findProviderById'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof findProviderByIdRequest_dto_1.FindProviderByIdRequestDto !== "undefined" && findProviderByIdRequest_dto_1.FindProviderByIdRequestDto) === "function" ? _t : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "findProviderById", null);
__decorate([
    (0, microservices_1.MessagePattern)('profileShare'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof profileShareRequest_dto_1.ProfileShareRequestDto !== "undefined" && profileShareRequest_dto_1.ProfileShareRequestDto) === "function" ? _u : Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "profileShare", null);
RegistrationController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof registration_service_1.RegistrationService !== "undefined" && registration_service_1.RegistrationService) === "function" ? _a : Object])
], RegistrationController);
exports.RegistrationController = RegistrationController;


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
exports.LoginAbhaIdGenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class LoginAbhaIdGenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam1415@sbx' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginAbhaIdGenerateOtpRequestDto.prototype, "abhaId", void 0);
exports.LoginAbhaIdGenerateOtpRequestDto = LoginAbhaIdGenerateOtpRequestDto;


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
exports.LoginAbhaNumberGenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class LoginAbhaNumberGenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '43-4221-5105-6749' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginAbhaNumberGenerateOtpRequestDto.prototype, "abhaNumber", void 0);
exports.LoginAbhaNumberGenerateOtpRequestDto = LoginAbhaNumberGenerateOtpRequestDto;


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
exports.LoginMobileConfirmRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
exports.LoginMobileGenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class LoginMobileGenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '9377612136' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileGenerateOtpRequestDto.prototype, "mobile", void 0);
exports.LoginMobileGenerateOtpRequestDto = LoginMobileGenerateOtpRequestDto;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginMobileVerifyOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class LoginMobileVerifyOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0fd9e004-86a6-4130-a952-b17ccfd42b6e' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileVerifyOtpRequestDto.prototype, "txnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '909090' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileVerifyOtpRequestDto.prototype, "otp", void 0);
exports.LoginMobileVerifyOtpRequestDto = LoginMobileVerifyOtpRequestDto;


/***/ }),
/* 18 */
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
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
exports.ProfileShareRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
exports.CreateHealthIdPreVerifiedRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
/* 21 */
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
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenerateOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class GenerateOtpRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', default: '278623899118' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateOtpRequestDto.prototype, "aadhaar", void 0);
exports.GenerateOtpRequestDto = GenerateOtpRequestDto;


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
exports.VerifyOtpRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
exports.CreateHealthIdRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
exports.ExistByHealthIdRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class ExistByHealthIdRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'shivam1411' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExistByHealthIdRequestDto.prototype, "healthId", void 0);
exports.ExistByHealthIdRequestDto = ExistByHealthIdRequestDto;


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
exports.GenerateOtpMobileRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
class GenerateOtpMobileRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', default: '9377612136' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateOtpMobileRequestDto.prototype, "mobile", void 0);
exports.GenerateOtpMobileRequestDto = GenerateOtpMobileRequestDto;


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
exports.VerifyOtpMobileRequestDto = void 0;
const swagger_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationService = void 0;
const axios_1 = __webpack_require__(4);
const common_1 = __webpack_require__(5);
const rxjs_1 = __webpack_require__(29);
const NodeRSA = __webpack_require__(30);
const config_1 = __webpack_require__(31);
let RegistrationService = class RegistrationService {
    constructor(http) {
        this.http = http;
        this.CLIENT_ID = process.env.CLIENT_ID;
        this.CLIENT_SECRET = process.env.CLIENT_SECRET;
        this.SESSION_TOKEN = null;
        this.REFRESH_TOKEN = null;
    }
    onModuleInit() {
        console.log(`CLIENT_ID : ${this.CLIENT_ID} , CLIENT_SECRET : ${this.CLIENT_SECRET}`);
        this.loadSessionToken();
    }
    async loadSessionToken() {
        this.http.post(config_1.SESSION_URL, { clientId: this.CLIENT_ID, clientSecret: this.CLIENT_SECRET }, { headers: { 'content-type': 'application/json' } }).pipe().subscribe({
            next: (value) => {
                this.SESSION_TOKEN = value.data.accessToken;
                this.REFRESH_TOKEN = value.data.refreshToken;
                const timeout = setTimeout(() => {
                    this.refreshToken();
                }, 400 * 1000);
            }, error(err) {
                console.error(err);
            },
        });
    }
    async refreshToken() {
        if (this.REFRESH_TOKEN) {
            this.loadSessionToken();
        }
    }
    async postGateway(payload) {
        const headers = Object.assign(Object.assign({}, payload === null || payload === void 0 ? void 0 : payload.headers), { 'content-type': 'application/json', 'Accept-Language': 'en-US', 'Authorization': `Bearer ${this.SESSION_TOKEN}` });
        const url = payload.url;
        console.log(`Calling: POST ${url}, Payload body: ${payload.body}, Payload headers: ${payload.headers}`);
        return this.http.post(url, payload.body || {}, { headers }).pipe((0, rxjs_1.map)(value => value.data), (0, rxjs_1.catchError)((err) => {
            console.error('Error occured: ', JSON.stringify(err.message));
            console.log(url, payload.body, headers);
            return (0, rxjs_1.of)({ error: err });
        }));
    }
    async getGateway(payload) {
        const headers = Object.assign(Object.assign({}, payload === null || payload === void 0 ? void 0 : payload.headers), { 'content-type': 'application/json', 'Accept-Language': 'en-US', 'Authorization': `Bearer ${this.SESSION_TOKEN}` });
        const url = payload.url;
        console.log(`Calling: GET ${url}`);
        return this.http.get(url, {
            params: payload.params || {},
            headers,
        }).pipe((0, rxjs_1.map)(value => value.data), (0, rxjs_1.catchError)((err) => {
            console.log('Error occured: ', JSON.stringify(err.message));
            console.log(url, payload.params, headers);
            return (0, rxjs_1.of)({ error: 'Error: ' });
        }));
    }
    async getReqForQr(payload) {
        const headers = Object.assign(Object.assign({}, payload === null || payload === void 0 ? void 0 : payload.headers), { 'content-type': 'application/json', 'Accept-Language': 'en-US', 'Authorization': `Bearer ${this.SESSION_TOKEN}` });
        const url = payload.url;
        console.log(`Calling: GET ${url}`);
        return this.http.get(url, {
            params: payload.params || {},
            headers,
            responseType: 'arraybuffer'
        }).pipe((0, rxjs_1.map)((response) => {
            return Buffer.from(response.data, 'binary').toString('base64');
        }), (0, rxjs_1.catchError)((err) => {
            console.log('Error occured: ', JSON.stringify(err.message));
            console.log(url, payload.params, headers);
            return (0, rxjs_1.of)({ error: 'Error: ' });
        }));
    }
    async getBinaryGateway(payload) {
        const headers = Object.assign(Object.assign({}, payload === null || payload === void 0 ? void 0 : payload.headers), { 'content-type': 'application/json', 'Accept-Language': 'en-US', 'Authorization': `Bearer ${this.SESSION_TOKEN}` });
        const url = `${config_1.BASE_URL}/${payload.url}`;
        console.log(`Calling: GET ${url}`);
        return this.http.get(url, {
            params: payload.params || {},
            headers, responseType: 'arraybuffer'
        }).pipe((0, rxjs_1.map)(value => value.data), (0, rxjs_1.catchError)((err) => {
            console.log('Error occured: ', Object.keys(err.message));
            console.log(url, payload.params, headers);
            return (0, rxjs_1.of)({ error: 'Error: ' });
        }));
    }
    getGUID() {
        let d = new Date().getTime();
        const guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return guid;
    }
    async generateMobileOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.GENERATE_MOBILE_OTP,
            body: body,
            headers: {}
        });
    }
    async verifyMobileOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.VERIFY_MOBILE_OTP,
            body: body,
            headers: {}
        });
    }
    async createHealthId(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.CREATE_HEALTH_ID,
            body: body,
            headers: {}
        });
    }
    async generateAadhaarOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.GENERATE_AADHAAR_OTP,
            body: body,
            headers: {}
        });
    }
    async verifyAadhaarOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.VERIFY_AADHAAR_OTP,
            body: body,
            headers: {}
        });
    }
    async generateAadhaarMobileOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.GENERATE_AADHAAR_MOBILE_OTP,
            body: body,
            headers: {}
        });
    }
    async verifyAadhaarMobileOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.VERIFY_AADHAAR_MOBILE_OTP,
            body: body,
            headers: {}
        });
    }
    async createHealthIdPreverified(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.CREATE_HEALTH_ID_PREVERIFIED,
            body: body,
            headers: {}
        });
    }
    async existsByHealthId(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.EXIST_BY_HEALTH_ID,
            body: body,
            headers: {}
        });
    }
    async getCert() {
        return (await (0, rxjs_1.lastValueFrom)(this.http.get(`${config_1.PHR_CERT_URL}`, {}))).data;
    }
    async loginMobileGenerateOtp(body) {
        const enc = new NodeRSA();
        enc.setOptions({ environment: 'browser', encryptionScheme: 'pkcs1' });
        const mobileEncrypted = enc.importKey((await this.getCert()), 'pkcs8-public').encrypt((body.mobile), 'base64');
        return this.postGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.LOGIN_MOBILE_GENERATE_OTP,
            body: {
                "value": mobileEncrypted,
                "purpose": "CM_ACCESS",
                "authMode": "MOBILE_OTP",
                "requester": {
                    "type": "PHR",
                    "id": "phr_001"
                }
            },
            headers: {}
        });
    }
    async loginMobileVerifyOtp(body) {
        const enc = new NodeRSA();
        enc.setOptions({ environment: 'browser', encryptionScheme: 'pkcs1' });
        const authCode = enc.importKey((await this.getCert()), 'pkcs8-public').encrypt((body.otp), 'base64');
        return this.postGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.LOGIN_MOBILE_VERIFY_OTP,
            body: {
                "transactionId": body.txnId,
                "authCode": authCode,
                "requesterId": "phr_001"
            },
            headers: {}
        });
    }
    async loginMobileConfirm(body) {
        return this.postGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.LOGIN_MOBILE_CONFIRM,
            body: {
                "transactionId": body.txnId,
                "patientId": body.patientId,
                "requesterId": "phr_001"
            },
            headers: {}
        });
    }
    async loginAbhaIdGenerateOtp(body) {
        return this.postGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.LOGIN_ABHAID_GENERATE_OTP,
            body: {
                "patientId": body.abhaId,
                "purpose": "CM_ACCESS",
                "authMode": "MOBILE_OTP",
                "requester": {
                    "type": "PHR",
                    "id": "phr_001"
                }
            },
            headers: {}
        });
    }
    async loginAbhaIdVerifyOtp(body) {
        const enc = new NodeRSA();
        enc.setOptions({ environment: 'browser', encryptionScheme: 'pkcs1' });
        const authCode = enc.importKey((await this.getCert()), 'pkcs8-public').encrypt((body.otp), 'base64');
        return this.postGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.LOGIN_ABHAID_VERIFY_OTP,
            body: {
                "transactionId": body.txnId,
                "authCode": authCode,
                "requesterId": "phr_001"
            },
            headers: {}
        });
    }
    async loginAbhaNumberGenerateOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.LOGIN_ABHANUMBER_GENERATE_OTP,
            body: {
                "healthid": body.abhaNumber,
                "authMethod": "MOBILE_OTP",
            },
            headers: {}
        });
    }
    async loginAbhaNumberVerifyOtp(body) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.LOGIN_ABHANUMBER_VERIFY_OTP,
            body: {
                "txnId": body.txnId,
                "otp": body.otp,
            },
            headers: {}
        });
    }
    async getProfile(userToken) {
        return this.getGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.PROFILE,
            params: {},
            headers: {
                'X-Auth-Token': `Bearer ${userToken}`
            }
        });
    }
    async getQrCode(userToken) {
        return this.getReqForQr({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.QR_CODE,
            params: {},
            headers: {
                'X-Auth-Token': `Bearer ${userToken}`,
            }
        });
    }
    async refreshUserToken(refreshToken) {
        return this.postGateway({
            url: config_1.BASE_URL + config_1.ENDPOINTS.REFRESH_TOKEN,
            body: {
                "refreshToken": refreshToken
            },
            headers: {}
        });
    }
    async findProviderById(body) {
        return this.getGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.FIND_PROVIDER_BY_ID + body.hipId,
            params: {},
            headers: {
                "X-AUTH-TOKEN": `Bearer ${body.userToken}`
            },
        });
    }
    async profileShare(body) {
        return this.postGateway({
            url: config_1.PHR_BASE_URL + config_1.ENDPOINTS.PROFILE_SHARE,
            body: {
                "requestId": this.getGUID(),
                "intent": {
                    "type": "REGISTRATION"
                },
                "hipDetails": {
                    "hipId": body.hipId,
                    "code": body.counter,
                }
            },
            headers: {
                "X-AUTH-TOKEN": `Bearer ${body.userToken}`
            }
        });
    }
};
RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], RegistrationService);
exports.RegistrationService = RegistrationService;


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("node-rsa");

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENDPOINTS = exports.PHR_CERT_URL = exports.PHR_BASE_URL = exports.BASE_URL = exports.SESSION_URL = void 0;
exports.SESSION_URL = 'https://dev.abdm.gov.in/gateway/v0.5/sessions';
exports.BASE_URL = 'https://healthidsbx.abdm.gov.in/api';
exports.PHR_BASE_URL = 'https://dev.abdm.gov.in/cm';
exports.PHR_CERT_URL = 'https://phrsbx.abdm.gov.in/api/v1/phr/public/certificate';
exports.ENDPOINTS = {
    CERT: '/v1/auth/cert',
    GENERATE_MOBILE_OTP: '/v1/registration/mobile/generateOtp',
    VERIFY_MOBILE_OTP: '/v1/registration/mobile/verifyOtp',
    CREATE_HEALTH_ID: '/v1/registration/mobile/createHealthId',
    GENERATE_AADHAAR_OTP: '/v1/registration/aadhaar/generateOtp',
    VERIFY_AADHAAR_OTP: '/v1/registration/aadhaar/verifyOTP',
    GENERATE_AADHAAR_MOBILE_OTP: '/v1/registration/aadhaar/generateMobileOTP',
    VERIFY_AADHAAR_MOBILE_OTP: '/v1/registration/aadhaar/verifyMobileOTP',
    CREATE_HEALTH_ID_PREVERIFIED: '/v1/registration/aadhaar/createHealthIdWithPreVerified',
    EXIST_BY_HEALTH_ID: '/v1/search/existsByHealthId',
    LOGIN_MOBILE_GENERATE_OTP: '/v1/apps/login/mobileEmail/auth-init',
    LOGIN_MOBILE_VERIFY_OTP: '/v1/apps/login/mobileEmail/pre-Verify',
    LOGIN_MOBILE_CONFIRM: '/v1/apps/login/mobileEmail/auth-confirm',
    LOGIN_ABHAID_GENERATE_OTP: '/v1/apps/phrAddress/auth-init',
    LOGIN_ABHAID_VERIFY_OTP: '/v1/apps/phrAddress/auth-confirm',
    LOGIN_ABHANUMBER_GENERATE_OTP: '/v1/auth/init',
    LOGIN_ABHANUMBER_VERIFY_OTP: '/v1/auth/confirmWithMobileOTP',
    PROFILE: '/v1/apps/profile/me',
    QR_CODE: '/v1/apps/patients/qr-code',
    REFRESH_TOKEN: '/v1/auth/generate/access-token',
    FIND_PROVIDER_BY_ID: '/providers/',
    PROFILE_SHARE: '/v1/patients/profile/share'
};


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
const abha_services_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(abha_services_module_1.AbhaServicesModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            port: 8081,
            retryAttempts: 3,
            retryDelay: 1000
        }
    });
    await app.listen();
    console.log('abha-services started');
}
bootstrap();

})();

/******/ })()
;