import { Data, Result } from './Common';
export interface VideoUploadUrlParam {
    open_id: string; //通过/oauth/access_token/获取，用户唯一标志 ba253642-0590-40bc-9bdf-9a1334b94059 true
    access_token: string; //调用/oauth/access_token/生成的token，此token需要用户授权。 act.1d1021d2aee3d41fee2d2add43456badMFZnrhFhfWotu3Ecuiuka27L56lr true
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
    'Content-Type': string;//video/mp4
}

type VideoStruct = {
    height: number;
    video_id: string;
    width: number;
}

interface VideoUploadData extends Data {
    video: VideoStruct
}

export type VideoUploadResult = Result<VideoUploadData>
