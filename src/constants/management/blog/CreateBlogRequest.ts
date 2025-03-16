import { blogStatusEnums } from "../../enums/blogStatusEnums";
import { BlogCategoryDto, CategoryDto, UserDto } from "./GetAllBlogRequest";

export interface CreateBlogRequest {
    title: string;
    content?: string;
    slug?: string;
    status?: blogStatusEnums
    categories?: CategoryDto[];
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
