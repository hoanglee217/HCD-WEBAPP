import { IPagination } from "../../../interfaces/IPagination";
import { categoryEnums } from "../../enums/categoryEnums";

export interface UpdateCategoryRequest {
    name?: string;
    position?: string;
    parentId?: string;
    categoryEnums?: categoryEnums;
}
export interface UpdateCategoryResponseItem {
    id: string;
    name: string;
    position: string;
    parentId: string;
    categoryEnums: categoryEnums;
}
export type UpdateCategoryResponse = IPagination<UpdateCategoryResponseItem>;