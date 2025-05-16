
export interface GetDetailImageRequest {
    id: string;
}
export interface GetDetailImageResponse {
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
  