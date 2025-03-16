
import { IPagination } from "../../../interfaces/IPagination";

export interface GetAllCommentRequest {

}
export interface GetAllCommentResponseItem {
    id: string;
    title: string;
}
export type GetAllCommentResponse = IPagination<GetAllCommentResponseItem>;
  