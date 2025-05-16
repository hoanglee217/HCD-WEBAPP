export interface UploadImageRequest {
    file: File;
}  
export interface UploadImageResponse {
    id: string;
    title: string;
    url: string;
    fileName: string;
    size: number;
    format: string;
    altText?: string;
    thumbnailUrl?: string;
    caption?: string;
    description?: string;
}