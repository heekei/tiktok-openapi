import { Data, Result } from './Common';
export interface ConnectParams {
    /**
     * @description 应用唯一标识
     * @type {string}
     * @memberof ConnectParams
     */
    client_key: string;
    /**
     * @description 写死为'code'即可
     * @type {string}
     * @memberof ConnectParams
     */
    response_type: string;
    /**
     * @description 应用授权作用域,多个授权作用域以英文逗号（,）分隔
     * @type {string}
     * @memberof ConnectParams
     */
    scope: string;
    /**
     * @description 应用授权可选作用域,多个授权作用域以英文逗号（,）分隔，每一个授权作用域后需要加上一个是否默认勾选的参数，1为默认勾选，0为默认不勾选
     * @type {string?}
     * @example friend_relation,1,message,0
     * @memberof ConnectParams
     */
    optionalScope?: string;
    /**
     * @description  授权成功后的回调地址，必须以http/https开头。域名必须对应申请应用时填写的域名，如不清楚请联系应用申请人。
     * @type {string}
     * @memberof ConnectParams
     */
    redirect_uri: string;
    /**
     * @description 用于保持请求和回调的状态
     * @type {string?}
     * @memberof ConnectParams
     */
    state?: string;
}
export interface AccesstokenParams {
    /**
     * @description 应用唯一标识对应的密钥
     * @type {string}
     * @memberof AccesstokenParams
     */
    client_secret: string;
    /**
     * @description 授权码
     * @type {string}
     * @memberof AccesstokenParams
     */
    code: string;
    /**
     * @description 写死"authorization_code"即可
     * @type {string}
     * @memberof AccesstokenParams
     */
    grant_type: string;
    /**
     * @description 应用唯一标识
     * @type {string}
     * @memberof AccesstokenParams
     */
    client_key: string;
}
interface AccesstokenData extends Data {
    access_token: string;
    expires_in: string;
    open_id: string;
    refresh_expires_in: string;
    refresh_token: string;
    scope: string;
}
export declare type AccesstokenResult = Result<AccesstokenData>;
export interface RenewRefreshTokenParams {
    /**
     * @description 应用唯一标识
     * @type {string}
     * @memberof RenewRefreshTokenParams
     */
    client_key: string;
    /**
     * @description 填写通过access_token获取到的refresh_token参数
     * @type {string}
     * @memberof RenewRefreshTokenParams
     */
    refresh_token: string;
}
interface RenewRefreshTokenData extends Data {
    expires_in: string;
    refresh_token: string;
}
export declare type RenewRefreshTokenResult = Result<RenewRefreshTokenData>;
export interface ClientTokenParams {
    /**
     * @description 应用唯一标识
     * @type {string}
     * @memberof ClientTokenParams
     */
    client_key: string;
    /**
     * @description 应用唯一标识对应的密钥
     * @type {string}
     * @memberof ClientTokenParams
     */
    client_secret: string;
    /**
     * @description 传client_credential
     * @type {string}
     * @memberof ClientTokenParams
     */
    grant_type: string;
}
interface ClientTokenData extends Data {
    access_token: string;
    expires_in: string;
}
export declare type ClientTokenResult = Result<ClientTokenData>;
export interface RefreshTokenParams {
    /**
     * @description 应用唯一标识
     * @type {string}
     * @memberof RefreshTokenParams
     */
    client_key: string;
    /**
     * @description 填写通过access_token获取到的refresh_token参数
     * @type {string}
     * @memberof RefreshTokenParams
     */
    refresh_token: string;
    /**
     * @description 填refresh_token
     * @type {string}
     * @memberof RefreshTokenParams
     */
    grant_type: string;
}
interface RefreshTokenData extends Data {
    access_token: string;
    expires_in: string;
    open_id: string;
    refresh_expires_in: string;
    refresh_token: string;
    scope: string;
}
export declare type RefreshTokenResult = Result<RefreshTokenData>;
export interface AuthorizeV2Params {
    /**
     * @description 应用唯一标识
     * @type {string}
     * @memberof AuthorizeV2Params
     */
    client_key: string;
    /**
     * @description 写死为'code'即可
     * @type {string}
     * @memberof AuthorizeV2Params
     */
    response_type: string;
    /**
     * @description 填login_id
     * @type {string}
     * @memberof AuthorizeV2Params
     */
    scope: string;
    /**
     * @description 授权成功后的回调地址
     * @summary 必须以http/https开头。域名要跟申请应用时填写的授权回调域一致。用于调用https://open.douyin.com/oauth/access_token/换token。
     * @type {string}
     * @memberof AuthorizeV2Params
     */
    redirect_uri: string;
    /**
     * @description 用于保持请求和回调状态，授权请求后会原样返回给接入方,如果是App则不用传该参数
     * @type {string}
     * @memberof AuthorizeV2Params
     */
    state: string;
}
export {};
