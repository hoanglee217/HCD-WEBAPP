import { categoryEnums } from "../../enums/categoryEnums";

export interface GetDetailCategoryRequest {
    id: string;
}
export interface GetDetailCategoryResponse {
    id: string;
    name: string;
    position: string;
    parentId: string;
    categoryEnums: categoryEnums;
    children: GetDetailCategoryResponse[]
}