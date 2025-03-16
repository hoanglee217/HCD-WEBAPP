
import { IPagination } from "../../../interfaces/IPagination";

export interface GetAllImageRequest {

}
export interface GetAllImageResponseItem {
    id: string;
    title: string;
}
export type GetAllImageResponse = IPagination<GetAllImageResponseItem>;
  