
import { IPagination } from "../../../interfaces/IPagination";

export interface UpdateOptionRequest {
    id: string;
    title?: string;
}

export interface UpdateOptionResponseItem {
    id: string;
    title: string;
}

export type UpdateOptionResponse = IPagination<UpdateOptionResponseItem>;
  