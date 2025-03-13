import { IPagination } from "../../../interfaces/IPagination";

export interface UpdateBlogRequest {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    slug: string;
    rating: number;
}
export interface UpdateBlogResponseItem {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    slug: string;
    rating: number;
}
export type UpdateBlogResponse = IPagination<UpdateBlogResponseItem>;