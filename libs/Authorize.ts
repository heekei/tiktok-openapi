import { AccesstokenParams, AccesstokenResult, AuthorizeV2Params, ClientTokenParams, ClientTokenResult, ConnectParams, RefreshTokenParams, RefreshTokenResult, RenewRefreshTokenParams, RenewRefreshTokenResult } from '../interfaces/Authorize';
import { Result } from '../interfaces/Common';
import { ajax } from '../utils/ajax';


/**
 * @description 获取授权码(code)
 * @summary 该接口只适用于抖音获取授权临时票据（code）。
 * @param {ConnectParams} params
 * @returns {Promise<Result>}
 * @memberof Authorize
 */
export function connect(params: ConnectParams): Promise<Result> {
    return ajax.get('/platform/oauth/connect/', {
        params
    });
}
/**
 * @description 获取access_token
 * @summary 该接口用于获取用户授权第三方接口调用的凭证access_token；该接口适用于抖音/头条授权。
 * @param {AccesstokenParams} data
 * @returns 
 * @memberof Authorize
 */
export function accesstoken(data: AccesstokenParams): Promise<AccesstokenResult> {
    return ajax.post('/oauth/access_token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
}
/**
 * @description 刷新refresh_token
 * @summary 该接口用于刷新refresh_token的有效期；该接口适用于抖音授权。
 * @param {RenewRefreshTokenParams} data
 * @returns 
 * @memberof Authorize
 */
export function renewRefreshToken(data: RenewRefreshTokenParams): Promise<RenewRefreshTokenResult> {
    return ajax.post('/oauth/renew_refresh_token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description 生成client_token
 * @summary 该接口用于获取接口调用的凭证client_access_token，主要用于调用不需要用户授权就可以调用的接口；该接口适用于抖音/头条授权。
 * @param {ClientTokenParams} data
 * @returns {Promise<ClientTokenResult>}
 * @memberof Authorize
 */
export function clientToken(data: ClientTokenParams): Promise<ClientTokenResult> {
    return ajax.post('/oauth/client_token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description 刷新access_token
 * @summary 该接口用于刷新access_token的有效期；该接口适用于抖音/头条授权。
 * @param {RefreshTokenParams} data
 * @returns {Promise<RefreshTokenResult>}
 * @memberof Authorize
 */
export function refreshToken(data: RefreshTokenParams): Promise<RefreshTokenResult> {
    return ajax.post('/oauth/refresh_token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description 抖音静默获取授权码(code)
 * @summary 该接口适用于抖音获取静默授权临时票据（code）。
 * @param {AuthorizeV2Params} params
 * @returns {Promise<Result>}
 * @memberof Authorize
 */
export function authorizeV2(params: AuthorizeV2Params): Promise<Result> {
    return ajax.get('/oauth/refresh_token/', {
        params
    });
}
