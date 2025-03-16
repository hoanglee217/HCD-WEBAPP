
import { IPagination } from "../../../interfaces/IPagination";

export interface GetAllOptionRequest {

}
export interface GetAllOptionResponseItem {
    id: string;
    title: string;
}
export type GetAllOptionResponse = IPagination<GetAllOptionResponseItem>;
  