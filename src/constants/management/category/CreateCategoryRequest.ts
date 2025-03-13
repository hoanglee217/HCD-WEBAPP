import { categoryEnums } from "../../enums/categoryEnums";

export interface CreateCategoryRequest {
    name?: string;
    position?: string;
    parentId?: string;
    categoryEnums?: categoryEnums;
}
export interface CreateCategoryResponse{
    id: string;
    name: string;
    position: string;
    parentId: string;
    categoryEnums: categoryEnums;
}
