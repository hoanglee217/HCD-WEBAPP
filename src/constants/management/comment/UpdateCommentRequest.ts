
import { IPagination } from "../../../interfaces/IPagination";

export interface UpdateCommentRequest {
    id: string;
    title?: string;
}

export interface UpdateCommentResponseItem {
    id: string;
    title: string;
}

export type UpdateCommentResponse = IPagination<UpdateCommentResponseItem>;
  