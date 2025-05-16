import { blogStatusEnums } from "../../enums/blogStatusEnums";
import { BlogCategoryDto, BlogTagDto, UserDto } from "./GetAllBlogRequest";

export interface GetDetailBlogRequest {
    id: string;
}
export interface GetDetailBlogResponse {
    id?: string;
    title?: string;
    content?: string;
    slug?: string;
    thumbnail?: string;
    status?: blogStatusEnums;
    rating?: number;
    user?: UserDto;
    blogCategories?: BlogCategoryDto[];
    blogTags?: BlogTagDto[];
}