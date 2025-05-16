
import { IPagination } from "../../../interfaces/IPagination";

export interface UpdateImageRequest {
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

export interface UpdateImageResponseItem {
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

export type UpdateImageResponse = IPagination<UpdateImageResponseItem>;
  