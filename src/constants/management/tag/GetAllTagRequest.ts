
import { IPagination } from "../../../interfaces/IPagination";

export interface GetAllTagRequest {

}
export interface GetAllTagResponseItem {
    id: string;
    title: string;
}
export type GetAllTagResponse = IPagination<GetAllTagResponseItem>;
  