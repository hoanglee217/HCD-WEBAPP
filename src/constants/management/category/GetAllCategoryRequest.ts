import { IPagination } from "../../../interfaces/IPagination";
import { categoryEnums } from "../../enums/categoryEnums";

export interface GetAllCategoryRequest {

}
export interface GetAllCategoryResponseItem {
    id: string;
    name: string;
    position: string;
    parentId: string;
    categoryEnums: categoryEnums;
    children: GetAllCategoryResponseItem[]
}
export type GetAllCategoryResponse = IPagination<GetAllCategoryResponseItem>;