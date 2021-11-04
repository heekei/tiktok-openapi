import { Data, Extra, ListData, PageQueryParam, Result } from './Common';

export interface UserData extends Data {
    country: string;
    province: string;
    city: string;
    nickname: string;
    avatar: string;
    /**
     * @description aes加密手机号
     * @type {string}
     * @memberof UserData
     */
    encrypt_mobile?: string;
    /**
     * @description 类型: * `EAccountM` - 普通企业号 * `EAccountS` - 认证企业号 * `EAccountK` - 品牌企业号
     * @type {string}
     * @memberof UserData
     */
    e_account_role?: string;
    /**
     * @description 性别: * `0` - 未知 * `1` - 男性 * `2` - 女性
     * @type {string}
     * @memberof UserData
     */
    gender: number;
    /**
     * @description 用户在当前应用的唯一标识
     * @type {string}
     * @memberof UserData
     */
    open_id: string;
    /**
     * @description 用户在当前开发者账号下的唯一标识（未绑定开发者账号没有该字段）
     * @type {string}
     * @memberof UserData
     */
    union_id?: string;
}

export interface UserinfoParams {
    /**
     * @description 用户唯一标志, 通过/oauth/access_token/获取
     * @example ba253642-0590-40bc-9bdf-9a1334b94059
     * @type {string}
     * @memberof UserinfoParams
     */
    open_id: string;
    /**
     * @description 调用/oauth/access_token/生成的token，此token需要用户授权
     * @example act.1d1021d2aee3d41fee2d2add43456badMFZnrhFhfWotu3Ecuiuka27L56lr
     * @type {string}
     * @memberof UserinfoParams
     */
    access_token: string;
}

export interface UserinfoData extends Data, UserData { }

export type UserinfoResult = Result<UserinfoData>


export interface FansListParams extends PageQueryParam, UserinfoParams { }
export interface FansListData extends ListData {
    list: UserData[];
}
export interface FansListResult {
    data: FansListData;
    extra: Extra;
}


export interface FollowingListParams extends PageQueryParam, UserinfoParams { }
export interface FollowingListData extends ListData {
    list: UserData[];
}
export interface FollowingListResult {
    data: FollowingListData;
    extra: Extra;
}

export interface FansCheckParams extends UserinfoParams {
    follower_open_id: string;
}
export interface FansCheckData {
    /**
     * @description follower_open_id是否关注了open_id
     * @type {boolean}
     * @memberof FansCheckData
     */
    is_follower: boolean;
    /**
     * @description 若关注了，则返回关注时间。单位为秒级时间戳
     * @type {number}
     * @memberof FansCheckData
     */
    follow_time: number;
}
export interface FansCheckResult {
    data: FansCheckData;
    extra: Extra;
}