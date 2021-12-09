export interface Extra {
    /**
     * @description 标识请求的唯一id
     * @type {string}
     * @memberof Extra
     */
    logid: string;
    /**
     * @description 毫秒级时间戳
     * @type {number}
     * @memberof Extra
     */
    now: number;
    /**
     * @description 错误码描述
     * @type {string}
     * @memberof Extra
     */
    description?: string;
    /**
     * @description 子错误码
     * @type {number}
     * @memberof Extra
     */
    sub_error_code?: number;
    /**
     * @description 子错误码描述
     * @type {string}
     * @memberof Extra
     */
    sub_description?: string;
    /**
     * @description 错误码
     * @type {number}
     * @memberof Extra
     */
    error_code?: number;
}
export interface Data {
    description: string;
    error_code: number | string;
    [keys: string]: unknown;
}
export interface Result<T = Data> {
    data: T;
    extra: Extra;
    message?: string;
}
export interface PageQueryParam {
    /**
     * @description 分页游标, 第一页请求cursor是0, response中会返回下一页请求用到的cursor, 同时response还会返回has_more来表明是否有更多的数据。
     * @example 0
     * @type {number}
     * @memberof PageQueryParam
     */
    cursor: number;
    /**
     * @description 每页数量
     * @example 10
     * @type {number}
     * @memberof PageQueryParam
     */
    count: number;
}
export interface ListData {
    cursor: number;
    has_more: boolean;
    list: unknown[];
    total: number;
}
