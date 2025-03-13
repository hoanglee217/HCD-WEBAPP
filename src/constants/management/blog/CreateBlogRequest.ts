export interface CreateBlogRequest {
    title: string;
    content: string;
    slug: string;
    categoryId: string;
    userId: string;
}
export interface CreateBlogResponse{
    id: string;
    title: string;
    content: string;
    slug: string;
    rating: number;
    categoryId: string;
    userId: string;
}
