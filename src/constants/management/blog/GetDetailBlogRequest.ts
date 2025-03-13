export interface GetDetailBlogRequest {
    id: string;
}
export interface GetDetailBlogResponse {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    slug: string;
    rating: number;
}