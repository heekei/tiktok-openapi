import { Result } from '../interfaces/Common';
import { VideoCreateBodyData, VideoCreateResult, VideoPartUploadBodyData, VideoPartUploadInitResult, VideoPartUploadUrlParam, VideoUploadBodyData, VideoUploadResult, VideoUploadUrlParam } from '../interfaces/Video';
import { ajax } from '../utils/ajax';
import { Object2QueryString } from '../utils/transform';

/**
 * @description 上传视频
 * @scope video.create
 * @summary 该接口用于上传视频文件到文件服务器，获取视频文件video_id。该接口适用于抖音。
 * @tutorial 
 * - 抖音的OAuth API以https://open.douyin.com/开头。
   - 超过50m的视频建议采用分片上传，可以降低网关超时造成的失败。超过128m的视频必须采用分片上传。视频总大小4GB以内。单个分片建议20MB，最小5MB。
   - 为了更好的观看体验，推荐上传16:9，分辨率为720p（1280x720）及以上的竖版视频。
   - 支持常用视频格式，推荐使用 mp4 、webm。
   - 视频文件大小不超过128M，时长在15分钟以内。
   - 带品牌logo或品牌水印的视频，会命中抖音的审核逻辑，有比较大的概率导致分享视频推荐降权处理/分享视频下架处理/分享账号被封禁处理。强烈建议第三方应用自行处理好分享内容中的不合规水印。
   - 视频审核逻辑与端上一致。
 * @param {VideoUploadUrlParam} params
 * @param {VideoUploadBodyData} body
 * @return {*}  {Promise<VideoUploadResult>}
 */
export function VideoUpload(params: VideoUploadUrlParam, body: VideoUploadBodyData): Promise<VideoUploadResult> {
    const queryStr = Object2QueryString(params);
    return ajax.post(`/video/upload/?${queryStr}`, body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
}

/**
 * @description 分片初始化上传
 * @scope video.create
 * @summary 该接口用于分片上传视频文件到文件服务器，先初始化上传获取upload_id。该接口适用于抖音。
 * @tutorial 
 * - 抖音的OAuth API以https://open.douyin.com/开头。
   - 超过50m的视频建议采用分片上传，可以降低网关超时造成的失败。超过128m的视频必须采用分片上传。视频总大小4GB以内。单个分片建议20MB，最小5MB。
   - 为了更好的观看体验，推荐上传16:9，分辨率为720p（1280x720）及以上的竖版视频。
   - 支持常用视频格式，推荐使用 mp4 、webm。
   - 带品牌logo或品牌水印的视频，会命中抖音的审核逻辑，有比较大的概率导致分享视频推荐降权处理/分享视频下架处理/分享账号被封禁处理。强烈建议第三方应用自行处理好分享内容中的不合规水印。
   - 视频审核逻辑与端上一致。
 * @param {VideoUploadUrlParam} params
 * @return {*}  {Promise<VideoPartUploadInitResult>}
 */
export function VideoPartUploadInit(params: VideoUploadUrlParam): Promise<VideoPartUploadInitResult> {
    const queryStr = Object2QueryString(params);
    return ajax.post(`/video/part/init/?${queryStr}`);
}

/**
 * @description 分片上传
 * @scope video.create
 * @summary 该接口用于分片上传视频文件到文件服务器，上传阶段。该接口适用于抖音。
 * @tutorial 
 * - 抖音的OAuth API以https://open.douyin.com/开头。
   - 超过50m的视频建议采用分片上传，可以降低网关超时造成的失败。超过128m的视频必须采用分片上传。视频总大小4GB以内。单个分片建议20MB，最小5MB。
   - 注意参数中upload_id作为url参数时，必须encode，只对upload_id进行encode
   
   - 为了更好的观看体验，推荐上传16:9，分辨率为720p（1280x720）及以上的竖版视频。
   - 支持常用视频格式，推荐使用 mp4 、webm。
   - 带品牌logo或品牌水印的视频，会命中抖音的审核逻辑，有比较大的概率导致分享视频推荐降权处理/分享视频下架处理/分享账号被封禁处理。强烈建议第三方应用自行处理好分享内容中的不合规水印。
   - 视频审核逻辑与端上一致。
 * @param {VideoPartUploadUrlParam} params
 * @return {*}  {Promise<Result>}
 */
export function VideoPartUpload(params: VideoPartUploadUrlParam, body: VideoPartUploadBodyData): Promise<Result> {
    const queryStr = Object2QueryString(params);
    return ajax.post(`/video/part/upload/?${queryStr}`, body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
}

/**
 * @description 分片上传完成
 * @scope video.create
 * @summary 该接口用于分片上传视频文件到文件服务器，完成上传。该接口适用于抖音。
 * @tutorial 
 * - 抖音的OAuth API以https://open.douyin.com/开头。
   - 超过50m的视频建议采用分片上传，可以降低网关超时造成的失败。超过128m的视频必须采用分片上传。视频总大小4GB以内。单个分片建议20MB，最小5MB。
   - 注意参数中`upload_id`作为url参数时，必须encode，只对`upload_id`进行encode
   
   - 为了更好的观看体验，推荐上传16:9，分辨率为720p（1280x720）及以上的竖版视频。
   - 支持常用视频格式，推荐使用 mp4 、webm。
   - 带品牌logo或品牌水印的视频，会命中抖音的审核逻辑，有比较大的概率导致分享视频推荐降权处理/分享视频下架处理/分享账号被封禁处理。强烈建议第三方应用自行处理好分享内容中的不合规水印。
   - 视频审核逻辑与端上一致。
 * @param {VideoPartUploadUrlParam} params
 * @return {*}  {Promise<VideoUploadResult>}
 */
export function VideoPartUploadFinish(params: VideoPartUploadUrlParam): Promise<VideoUploadResult> {
    const queryStr = Object2QueryString(params);
    return ajax.post(`/video/part/complete/?${queryStr}`);
}



/**
 * @description 创建抖音视频
 * @scope video.create
 * @summary 该接口用于创建抖音视频（支持话题, 小程序等功能）。该接口适用于抖音。
 * @tutorial 
 * - 抖音的OAuth API以https://open.douyin.com/开头。
   - 挂载小程序请先完成申请->申请及使用说明 
   - 创建抖音视频后, 会有一个审核过程, 期间只有自己可见。
   - 如果发布视频想@用户，需要获取昵称与open_id。
   - 目前发布视频接口，支持三种锚点类型，包括：小程序、游戏、poi。不支持携带多种类型的锚点。
   - 如需代用户创建视频，除授权外，每次调用都需要在产品设计中让用户明确感知相关操作。如发现未经用户感知代用户创建视频，或将回收相关接口权限并处罚应用及账号。
 * @param {VideoUploadUrlParam} params
 * @param {VideoCreateBodyData} body
 * @return {*} {Promise<VideoCreateResult>}
 */
export function VideoCreate(params: VideoUploadUrlParam, body: VideoCreateBodyData): Promise<VideoCreateResult> {
    const queryStr = Object2QueryString(params);
    return ajax.post(`/video/create/?${queryStr}`, body);
}
