import { FansCheckParams, FansCheckResult, FansListParams, FansListResult, FollowingListParams, FollowingListResult, UserinfoParams, UserinfoResult } from '../interfaces/User';
/**
 * @description 获取用户信息
 * @scope user_info
 * @summary 该接口获取用户的抖音公开信息，包含昵称、头像、性别和地区；适用于抖音。
 * @tutorial
 * - 获取用户手机号：
    - 需要用户授权mobile_alert 权限
    - 用户授权后该接口会返回encrypt_mobile
    - 解密手机号，使用Aes算法解密，秘钥是clientSecret， 向量lv 是clientSecret前16字节
 * @param {UserinfoParams} params
 * @returns {Promise<Result>}
 */
export declare function oauth_userinfo(params: UserinfoParams): Promise<UserinfoResult>;
/**
 * @description 获取粉丝列表
 * @scope fans.list
 * @summary 获取用户最近的粉丝列表，不保证顺序；目前可查询的粉丝数上限5千。该接口适用于抖音。
 * @param {FansListParams} params
 * @return {*}  {Promise<FansListResult>}
 */
export declare function fans_list(params: FansListParams): Promise<FansListResult>;
/**
 * @description 获取关注列表
 * @scope following.list
 * @summary 获取用户的关注列表；该接口适用于抖音。
 * @param {FollowingListParams} params
 * @return {Promise<FollowingListResult>}
 */
export declare function following_list(params: FollowingListParams): Promise<FollowingListResult>;
/**
 * @description 粉丝判断
 * @scope fans.check
 * @param {FansCheckParams} params
 * @return {*}  {Promise<FansCheckResult>}
 */
export declare function fans_check(params: FansCheckParams): Promise<FansCheckResult>;
