import { AccesstokenParams, AccesstokenResult, AuthorizeV2Params, ClientTokenParams, ClientTokenResult, ConnectParams, RefreshTokenParams, RefreshTokenResult, RenewRefreshTokenParams, RenewRefreshTokenResult } from '../interfaces/Authorize';
import { Result } from '../interfaces/Common';
import { ajax } from '../utils/ajax';

/**
 * @description 获取授权码(code)
 * @summary 该接口只适用于抖音获取授权临时票据（code）。
 * @param {ConnectParams} params
 * @returns {Promise<Result>}
 */
export function platform_oauth_connect(params: ConnectParams): Promise<Result> {
    return ajax.get('/platform/oauth/connect/', {
        params
    });
}
/**
 * @description 获取access_token
 * @summary 该接口用于获取用户授权第三方接口调用的凭证access_token；该接口适用于抖音/头条授权。
 * @param {AccesstokenParams} data
 * @returns {Promise<AccesstokenResult>}
 */
export function oauth_accesstoken(data: AccesstokenParams): Promise<AccesstokenResult> {
    return ajax.post('/oauth/access_token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
}
/**
 * @description 刷新refresh_token
 * @scope renew_refresh_token
 * @summary 该接口用于刷新refresh_token的有效期；该接口适用于抖音授权。
 * @param {RenewRefreshTokenParams} data
 * @returns {Promise<RenewRefreshTokenResult>}
 */
export function oauth_renew_refresh_token(data: RenewRefreshTokenParams): Promise<RenewRefreshTokenResult> {
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
 */
export function oauth_client_token(data: ClientTokenParams): Promise<ClientTokenResult> {
    return ajax.post('/oauth/client_token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description 刷新access_token
 * @summary 该接口用于刷新access_token的有效期；该接口适用于抖音/头条授权。
 * @tutorial 
 *  - access_token有效期说明： 
    - 当access_token过期（过期时间15天）后，可以通过该接口使用refresh_token（过期时间30天）进行刷新：
    1. 若access_token已过期，调用接口会报错(error_code=10008或2190008)，refresh_token后会获取一个新的access_token以及新的超时时间。
    2. 若access_token未过期，refresh_token不会改变原来的access_token，但超时时间会更新，相当于续期。
    3. 若refresh_token过期，获取access_token会报错(error_code=10010)，此时需要重新走用户授权流程。
 * @param {RefreshTokenParams} data
 * @returns {Promise<RefreshTokenResult>}
 */
export function oauth_refresh_token(data: RefreshTokenParams): Promise<RefreshTokenResult> {
    return ajax.post('/oauth/refresh_token/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description 抖音静默获取授权码(code)
 * @scope login_id
 * @summary 该接口适用于抖音获取静默授权临时票据（code）。
 * @param {AuthorizeV2Params} params
 * @returns {Promise<Result>}
 */
export function oauth_authorize_v2(params: AuthorizeV2Params): Promise<Result> {
    return ajax.get('/oauth/authorize/v2/', {
        params
    });
}
