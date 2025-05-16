
import { IPagination } from "../../../interfaces/IPagination";

export interface UpdateTagRequest {
    id: string;
    name?: string;
}

export interface UpdateTagResponseItem {
    id: string;
    name: string;
}

export type UpdateTagResponse = IPagination<UpdateTagResponseItem>;
  