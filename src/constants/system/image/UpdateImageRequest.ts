
import { IPagination } from "../../../interfaces/IPagination";

export interface UpdateImageRequest {
    id: string;
    title?: string;
}

export interface UpdateImageResponseItem {
    id: string;
    title: string;
}

export type UpdateImageResponse = IPagination<UpdateImageResponseItem>;
  