import { Data, Result } from './Common';
export interface VideoUploadUrlParam {
    open_id: string;
    access_token: string;
}
export interface VideoUploadBodyData {
    /**
     * @description 视频文件
     * @summary 注意： 1. multipart/form-data中的Content-Type都必须以"video/"开头，如"video/mp4"，否则会报错："unsupported content type xxx"。
     *                 2. 该Content-Type不是加在Header中，是加在请求体里面：![如图](http://p3.pstatp.com/origin/2dd390008887d044455b9)
     * @type {[]}
     * @memberof VideoUploadBodyData
     */
    video: [];
    'Content-Type': string;
}
declare type VideoStruct = {
    height: number;
    video_id: string;
    width: number;
};
interface VideoUploadData extends Data {
    video: VideoStruct;
}
export declare type VideoUploadResult = Result<VideoUploadData>;
interface VideoPartUploadInitData extends Data {
    upload_id: string;
}
export declare type VideoPartUploadInitResult = Result<VideoPartUploadInitData>;
export interface VideoPartUploadUrlParam extends VideoUploadUrlParam {
    upload_id: string;
    part_number?: number;
}
export interface VideoPartUploadBodyData {
    /**
     * @description 视频文件
     * @summary 视频分片，建议20MB。但不能小于5MB
     * @type {Byte[]}
     * @memberof VideoUploadBodyData
     */
    video: [];
}
export interface VideoCreateBodyData {
    /**
     * @description video_id, 通过/video/upload/接口得到。注意每次调用/video/create/都要调用/video/upload/生成新的video_id。
     * @type {string}
     * @example v0201f510000smhdsr0ggl1v4a2b2ps1
     * @memberof VideoCreateBodyData
     */
    video_id: string;
    /**
     * @description 视频标题， 可以带话题,@用户。注意：话题审核依旧遵循抖音的审核逻辑，强烈建议第三方谨慎拟定话题名称，避免强导流行为。
     * @type {string}
     * @example title1#话题1 #话题2@nickname
     * @memberof VideoCreateBodyData
     */
    text?: string;
    /**
     * @description 地理位置id，poi_id可通过"查询POI信息"能力获取
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    poi_id?: string;
    /**
     * @description 地理位置名称
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    poi_name?: string;
    /**
     * @description 小程序id
     * @type {string}
     * @example ttef9b112671b152ba
     * @memberof VideoCreateBodyData
     */
    micro_app_id?: string;
    /**
     * @description 小程序标题
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    micro_app_title?: string;
    /**
     * @description 文章ID，暂不开放
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    article_id?: string;
    /**
     * @description 文章自定义标题，暂不开放
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    article_title?: string;
    /**
     * @description 时效新闻标签，1表示使用。暂不开放
     * @type {number}
     * @memberof VideoCreateBodyData
     */
    timeliness_label?: number;
    /**
     * @description 最多可添加3个，用|隔开。暂不开放
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    timeliness_keyword?: string;
    /**
     * @description 游戏id。暂不开放
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    game_id?: string;
    /**
     * @description 游戏个性化参数
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    game_content?: string;
    /**
     * @description 将传入的指定时间点对应帧设置为视频封面（单位：秒）
     * @type {number}
     * @example 2.3
     * @memberof VideoCreateBodyData
     */
    cover_tsp?: number;
    /**
     * @description 如果需要at其他用户。将text中@nickname对应的open_id放到这里。
     * @type {string[]}
     * @memberof VideoCreateBodyData
     */
    at_users?: string[];
    /**
     * @description 开发者在小程序中生成该页面时写的path地址
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    micro_app_url?: string;
    /**
     * @description 自定义封面图片,参数为接口/image/upload/ 返回的image_id
     * @type {string}
     * @memberof VideoCreateBodyData
     */
    custom_cover_image_url?: string;
}
export interface VideoCreateResultData extends Data {
    /**
     * @description 抖音视频ID
     * @type {string}
     * @memberof VideoCreateResultData
     */
    item_id: string;
}
export declare type VideoCreateResult = Result<VideoCreateResultData>;
export {};
