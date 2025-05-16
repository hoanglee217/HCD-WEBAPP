
import { IPagination } from "../../../interfaces/IPagination";
import { blogStatusEnums } from "../../enums/blogStatusEnums";

export interface GetAllTagRequest {

}
export interface GetAllTagResponseItem {
    id: string;
    name: string;
    blogTags?: BlogTags;
}
export type GetAllTagResponse = IPagination<GetAllTagResponseItem>;
  

export interface BlogTags{
    blogId: string;
    tagId: string;
    blog: Blogs;
}
export interface Blogs{
    id: string;
        title: string;
        content: string;
        categoryId: string;
        userId: string;
        slug: string;
        status: blogStatusEnums;
        rating: number;
}