import { VideoUploadBodyData, VideoUploadResult, VideoUploadUrlParam } from '../interfaces/Video';
import { ajax } from '../utils/ajax';
import { Object2QueryString } from '../utils/transform';

export function VideoUpload(params: VideoUploadUrlParam, body: VideoUploadBodyData): Promise<VideoUploadResult> {
    const queryStr = Object2QueryString(params);
    return ajax.post(`/video/upload/?${queryStr}`, body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
}