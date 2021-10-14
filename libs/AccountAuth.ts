export interface OAuthConnectParams {
    /**
     * @description 应用唯一标识
     * @type {string}
     * @memberof OAuthConnectParams
     */
    client_key: string;
    /**
     * @description 写死为'code'即可
     * @type {string}
     * @memberof OAuthConnectParams
     */
    response_type: string;
    /**
     * @description 应用授权作用域,多个授权作用域以英文逗号（,）分隔
     * @type {string}
     * @memberof OAuthConnectParams
     */
    scope: string;
    /**
     * @description 应用授权可选作用域,多个授权作用域以英文逗号（,）分隔，每一个授权作用域后需要加上一个是否默认勾选的参数，1为默认勾选，0为默认不勾选
     * @type {string?}
     * @example friend_relation,1,message,0
     * @memberof OAuthConnectParams
     */
    optionalScope?: string;
    /**
     * @description  授权成功后的回调地址，必须以http/https开头。域名必须对应申请应用时填写的域名，如不清楚请联系应用申请人。
     * @type {string}
     * @memberof OAuthConnectParams
     */
    redirect_uri: string;
    /**
     * @description 用于保持请求和回调的状态
     * @type {string?}
     * @memberof OAuthConnectParams
     */
    state?: string;
}