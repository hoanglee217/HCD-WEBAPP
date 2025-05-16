
import { IPagination } from "../../../interfaces/IPagination";

export interface GetAllImageRequest {

}
export interface GetAllImageResponseItem {
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
    createAt?: string;
}
export type GetAllImageResponse = IPagination<GetAllImageResponseItem>;
  