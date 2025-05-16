import { IPagination } from "../../../interfaces/IPagination";
import { blogStatusEnums } from "../../enums/blogStatusEnums";
import { BlogCategoryDto, BlogTagDto, UserDto } from "./GetAllBlogRequest";

export interface UpdateBlogRequest {
    id: string;
    title?: string;
    content?: string;
    slug?: string;
    thumbnail?: string;
    status?: blogStatusEnums;
    categories?: string[];
    tags?: string[];
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
    blogTags: BlogTagDto[];
}
export type UpdateBlogResponse = IPagination<UpdateBlogResponseItem>;