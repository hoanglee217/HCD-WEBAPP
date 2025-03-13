import { IPagination } from "../../../interfaces/IPagination";

export interface GetAllBlogRequest {

}
export interface GetAllBlogResponseItem {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    slug: string;
    rating: number;
    user: UserDto;
    blogCategories: BlogCategoryDto[];
}
export type GetAllBlogResponse = IPagination<GetAllBlogResponseItem>;

interface UserDto{
    id: string;
    firstName: string;
    lastName: string;
}
interface BlogCategoryDto{
    id: string;
    category: CategoryDto
}
interface CategoryDto{
    id: string;
    name: string;
}