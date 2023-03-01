export const SESSION_URL = 'https://dev.abdm.gov.in/gateway/v0.5/sessions'

export const BASE_URL = 'https://healthidsbx.abdm.gov.in/api'

export const PHR_BASE_URL = 'https://dev.abdm.gov.in/cm'

export const PHR_CERT_URL = 'https://phrsbx.abdm.gov.in/api/v1/phr/public/certificate'

export const ENDPOINTS = {
    CERT: '/v1/auth/cert',

    GENERATE_MOBILE_OTP : '/v1/registration/mobile/generateOtp',
    VERIFY_MOBILE_OTP : '/v1/registration/mobile/verifyOtp',
    CREATE_HEALTH_ID : '/v1/registration/mobile/createHealthId',
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
}