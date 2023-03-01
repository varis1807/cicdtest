import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateHealthIdPreVerifiedRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/createHealthIdPreVerifiedRequest.dto';
import { GenerateMobileOtpRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/generateMobileOtpRequest.dto';
import { GenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/generateOtpRequest.dto';
import { VerifyOtpRequestDto } from 'apps/parchaa-ndhm/src/registration-aadhaar/dtos/verifyOtpRequest.dto';
import { CreateHealthIdRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/createHealthIdRequest.dto';
import { ExistByHealthIdRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/existByHealthIdRequest.dto';
import { GenerateOtpMobileRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/generateOtpMobileRequest.dto';
import { VerifyOtpMobileRequestDto } from 'apps/parchaa-ndhm/src/registration-mobile/dtos/verifyOtpMobileRequest.dto';
import { catchError, lastValueFrom, map, of, tap } from 'rxjs';
import * as NodeRSA from 'node-rsa';
import { SESSION_URL, BASE_URL, ENDPOINTS, PHR_BASE_URL, PHR_CERT_URL } from './config';
import { LoginMobileGenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginMobileGenerateOtpRequest.dto';
import { LoginMobileVerifyOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginMobileVerifyOtpRequest.dto';
import { LoginMobileConfirmRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginMobileConfirmRequest.dto';
import { LoginAbhaIdGenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginAbhaIdGenerateOtpRequest.dto';
import { LoginAbhaNumberGenerateOtpRequestDto } from 'apps/parchaa-ndhm/src/login/dtos/loginAbhaNumberGenerateOtpRequest.dto';

import { Blob } from 'buffer';
import { FindByIdRequestDto } from 'apps/parchaa-ndhm/src/user/dtos/findByIdRequest.dto';
import { FindProviderByIdRequestDto } from 'apps/parchaa-ndhm/src/profile/dtos/findProviderByIdRequest.dto';
import { ProfileShareRequestDto } from 'apps/parchaa-ndhm/src/profile/dtos/profileShareRequest.dto';

export interface PostDataInterface {
    url: string,
    body: any,
    headers: any
}
export interface GetDataInterface {
    url: string,
    params: any,
    headers: any
}

@Injectable()
export class RegistrationService {
    private CLIENT_ID = process.env.CLIENT_ID
    private CLIENT_SECRET = process.env.CLIENT_SECRET
    constructor(private http: HttpService) { }

    SESSION_TOKEN: string | null = null
    REFRESH_TOKEN: string | null = null

    onModuleInit() {
        console.log(`CLIENT_ID : ${this.CLIENT_ID} , CLIENT_SECRET : ${this.CLIENT_SECRET}`)
        this.loadSessionToken();
    }
    async loadSessionToken() {
        this.http.post(SESSION_URL, { clientId: this.CLIENT_ID, clientSecret: this.CLIENT_SECRET },
            { headers: { 'content-type': 'application/json' } }).pipe(
        ).subscribe({
            next: (value) => {
                this.SESSION_TOKEN = value.data.accessToken
                this.REFRESH_TOKEN = value.data.refreshToken
                const timeout = setTimeout(() => {
                    this.refreshToken();
                }, 400 * 1000);
            }, error(err) {
                console.error(err)
            },
        })
    }
    async refreshToken() {
        if (this.REFRESH_TOKEN) {
            // TODO: Change Logic Later 
            this.loadSessionToken();
        }
    }

    async postGateway(payload: PostDataInterface) {
        const headers = {
            ...payload?.headers,
            'content-type': 'application/json', 'Accept-Language': 'en-US',
            'Authorization': `Bearer ${this.SESSION_TOKEN}`
        };

        // const url = `${BASE_URL}${payload.url}`
        const url = payload.url;
        console.log(`Calling: POST ${url}, Payload body: ${payload.body}, Payload headers: ${payload.headers}`)
        return this.http.post(url, payload.body || {},
            { headers }).pipe(
                map(value => value.data),
                catchError((err) => {
                    console.error('Error occured: ', JSON.stringify(err.message))
                    console.log(url, payload.body, headers)
                    return of({ error: err })
                })
            )
    }
    async getGateway(payload: GetDataInterface) {
        const headers = {
            ...payload?.headers,
            'content-type': 'application/json', 'Accept-Language': 'en-US',
            'Authorization': `Bearer ${this.SESSION_TOKEN}`
        };

        const url = payload.url;
        console.log(`Calling: GET ${url}`)
        return this.http.get(url, {
            params: payload.params || {},
            headers,
        },
        ).pipe(
            map(value => value.data),
            catchError((err) => {
                console.log('Error occured: ', JSON.stringify(err.message))
                console.log(url, payload.params, headers)
                return of({ error: 'Error: ' })
            })
        )
    }
    async getReqForQr(payload: GetDataInterface) {
        const headers = {
            ...payload?.headers,
            'content-type': 'application/json', 'Accept-Language': 'en-US',
            'Authorization': `Bearer ${this.SESSION_TOKEN}`
        };

        const url = payload.url;
        console.log(`Calling: GET ${url}`)
        return this.http.get(url, {
            params: payload.params || {},
            headers,
            responseType: 'arraybuffer'
        },
        ).pipe(
            map((response) => {
                return Buffer.from(response.data, 'binary').toString('base64');
            }),
            catchError((err) => {
                console.log('Error occured: ', JSON.stringify(err.message))
                console.log(url, payload.params, headers)
                return of({ error: 'Error: ' })
            })
        )
    }

    async getBinaryGateway(payload: GetDataInterface) {
        const headers = {
            ...payload?.headers,
            'content-type': 'application/json', 'Accept-Language': 'en-US',
            'Authorization': `Bearer ${this.SESSION_TOKEN}`
        };

        const url = `${BASE_URL}/${payload.url}`
        console.log(`Calling: GET ${url}`)
        return this.http.get(url, {
            params: payload.params || {},
            headers, responseType: 'arraybuffer'
        },
        ).pipe(
            map(value => value.data),
            catchError((err) => {
                console.log('Error occured: ', Object.keys(err.message))
                console.log(url, payload.params, headers)
                return of({ error: 'Error: ' })
            })
        )
    }

    public getGUID(): string {
        let d = new Date().getTime();
        const guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return guid;
    }

    async generateMobileOtp(body: GenerateOtpMobileRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.GENERATE_MOBILE_OTP,
            body: body,
            headers: {}
        })
    }

    async verifyMobileOtp(body: VerifyOtpMobileRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.VERIFY_MOBILE_OTP,
            body: body,
            headers: {}
        })
    }

    async createHealthId(
        body: CreateHealthIdRequestDto
    ) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.CREATE_HEALTH_ID,
            body: body,
            headers: {}
        })
    }

    async generateAadhaarOtp(body: GenerateOtpRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.GENERATE_AADHAAR_OTP,
            body: body,
            headers: {}
        })
    }

    async verifyAadhaarOtp(body: VerifyOtpRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.VERIFY_AADHAAR_OTP,
            body: body,
            headers: {}
        })
    }

    async generateAadhaarMobileOtp(body: GenerateMobileOtpRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.GENERATE_AADHAAR_MOBILE_OTP,
            body: body,
            headers: {}
        })
    }

    async verifyAadhaarMobileOtp(body: VerifyOtpRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.VERIFY_AADHAAR_MOBILE_OTP,
            body: body,
            headers: {}
        })
    }

    async createHealthIdPreverified(body: CreateHealthIdPreVerifiedRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.CREATE_HEALTH_ID_PREVERIFIED,
            body: body,
            headers: {}
        })
    }

    async existsByHealthId(body: ExistByHealthIdRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.EXIST_BY_HEALTH_ID,
            body: body,
            headers: {}
        })
    }

    async getCert() {
        return (await lastValueFrom(this.http.get(`${PHR_CERT_URL}`, {}))).data;
    }

    async loginMobileGenerateOtp(body: LoginMobileGenerateOtpRequestDto) {
        const enc = new NodeRSA();
        enc.setOptions({ environment: 'browser', encryptionScheme: 'pkcs1' });
        const mobileEncrypted = enc.importKey((await this.getCert()), 'pkcs8-public').encrypt((body.mobile), 'base64');
        return this.postGateway({
            url: PHR_BASE_URL + ENDPOINTS.LOGIN_MOBILE_GENERATE_OTP,
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
        })
    }

    async loginMobileVerifyOtp(body: LoginMobileVerifyOtpRequestDto) {
        const enc = new NodeRSA();
        enc.setOptions({ environment: 'browser', encryptionScheme: 'pkcs1' });
        const authCode = enc.importKey((await this.getCert()), 'pkcs8-public').encrypt((body.otp), 'base64');
        return this.postGateway({
            url: PHR_BASE_URL + ENDPOINTS.LOGIN_MOBILE_VERIFY_OTP,
            body: {
                "transactionId": body.txnId,
                "authCode": authCode,
                "requesterId": "phr_001"
            },
            headers: {}
        })
    }

    async loginMobileConfirm(body: LoginMobileConfirmRequestDto) {
        return this.postGateway({
            url: PHR_BASE_URL + ENDPOINTS.LOGIN_MOBILE_CONFIRM,
            body: {
                "transactionId": body.txnId,
                "patientId": body.patientId,
                "requesterId": "phr_001"
            },
            headers: {}
        })
    }

    async loginAbhaIdGenerateOtp(body: LoginAbhaIdGenerateOtpRequestDto) {
        return this.postGateway({
            url: PHR_BASE_URL + ENDPOINTS.LOGIN_ABHAID_GENERATE_OTP,
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
        })
    }

    async loginAbhaIdVerifyOtp(body: LoginMobileVerifyOtpRequestDto) {
        const enc = new NodeRSA();
        enc.setOptions({ environment: 'browser', encryptionScheme: 'pkcs1' });
        const authCode = enc.importKey((await this.getCert()), 'pkcs8-public').encrypt((body.otp), 'base64');
        return this.postGateway({
            url: PHR_BASE_URL + ENDPOINTS.LOGIN_ABHAID_VERIFY_OTP,
            body: {
                "transactionId": body.txnId,
                "authCode": authCode,
                "requesterId": "phr_001"
            },
            headers: {}
        })
    }

    async loginAbhaNumberGenerateOtp(body: LoginAbhaNumberGenerateOtpRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.LOGIN_ABHANUMBER_GENERATE_OTP,
            body: {
                "healthid": body.abhaNumber,
                "authMethod": "MOBILE_OTP",
            },
            headers: {}
        })
    }

    async loginAbhaNumberVerifyOtp(body: LoginMobileVerifyOtpRequestDto) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.LOGIN_ABHANUMBER_VERIFY_OTP,
            body: {
                "txnId": body.txnId,
                "otp": body.otp,
            },
            headers: {}
        })
    }

    async getProfile(userToken: string) {
        return this.getGateway({
            url: PHR_BASE_URL + ENDPOINTS.PROFILE,
            params: {},
            headers: {
                'X-Auth-Token': `Bearer ${userToken}`
            }
        })
    }

    async getQrCode(userToken: string) {
        return this.getReqForQr({
            url: PHR_BASE_URL + ENDPOINTS.QR_CODE,
            params: {},
            headers: {
                'X-Auth-Token': `Bearer ${userToken}`,
            }
        })
    }

    async refreshUserToken(refreshToken: string) {
        return this.postGateway({
            url: BASE_URL + ENDPOINTS.REFRESH_TOKEN,
            body: {
                "refreshToken": refreshToken
            },
            headers: {}
        })
    }

    async findProviderById(body: FindProviderByIdRequestDto) {
        return this.getGateway({
            url: PHR_BASE_URL + ENDPOINTS.FIND_PROVIDER_BY_ID + body.hipId,
            params: {},
            headers: {
                "X-AUTH-TOKEN": `Bearer ${body.userToken}`
            },
        })
    }

    async profileShare(body: ProfileShareRequestDto) {
        return this.postGateway({
            url: PHR_BASE_URL + ENDPOINTS.PROFILE_SHARE,
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
        })
    }

}
