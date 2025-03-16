import { IPagination } from "../../../interfaces/IPagination";
import { blogStatusEnums } from "../../enums/blogStatusEnums";
import { BlogCategoryDto, UserDto } from "./GetAllBlogRequest";

export interface UpdateBlogRequest {
    id: string;
    title?: string;
    content?: string;
    slug?: string;
    status?: blogStatusEnums
    thumbnail?: string;
    rating?: number;
        user?: UserDto;
        blogCategories?: BlogCategoryDto[]
}
export interface UpdateBlogResponseItem {
    id: string;
        title: string;
        content: string;
        slug: string;
        status: blogStatusEnums;
    thumbnail?: string;
    rating: number;
        user: UserDto;
        blogCategories: BlogCategoryDto[];
}
export type UpdateBlogResponse = IPagination<UpdateBlogResponseItem>;