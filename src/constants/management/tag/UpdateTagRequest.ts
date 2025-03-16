
import { IPagination } from "../../../interfaces/IPagination";

export interface UpdateTagRequest {
    id: string;
    title?: string;
}

export interface UpdateTagResponseItem {
    id: string;
    title: string;
}

export type UpdateTagResponse = IPagination<UpdateTagResponseItem>;
  