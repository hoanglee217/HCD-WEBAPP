import { categoryEnums } from "../../enums/categoryEnums";
import { IPagination } from "../../../interfaces/IPagination";
import { blogStatusEnums } from "../../enums/blogStatusEnums";

export interface GetAllBlogRequest {

}
export interface GetAllBlogResponseItem {
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
    blogTags: BlogTagDto[];
}
export type GetAllBlogResponse = IPagination<GetAllBlogResponseItem>;

export interface UserDto{
    id: string;
    firstName: string;
    lastName: string;
}
export interface BlogCategoryDto{
    id: string;
    category: CategoryDto
}
export interface CategoryDto{
    id: string;
    name?: string;
    categoryEnums?: categoryEnums;
}
export interface BlogTagDto{
    id: string;
    tag: TagDto
}
export interface TagDto{
    id: string;
    name: string;
}