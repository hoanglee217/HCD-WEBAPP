import { blogStatusEnums } from "../../enums/blogStatusEnums";
import { BlogCategoryDto, UserDto } from "./GetAllBlogRequest";

export interface CreateBlogRequest {
    title?: string;
    content?: string;
    slug?: string;
    thumbnail?: string;
    status?: blogStatusEnums;
    categories?: string[];
    tags?: string[];
}
export interface CreateBlogResponse{
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    slug: string;
    status: blogStatusEnums;
    rating: number;
    user: UserDto;
    blogCategories: BlogCategoryDto[];
}
