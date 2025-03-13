import { UpdateBlogRequest, UpdateBlogResponse } from "../../../../constants/management/blog/UpdateBlogRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function UpdateBlogHandler(props: UpdateBlogRequest, id: string): Promise<UpdateBlogResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.put(`${apiUrl}/api/categories/${id}`, props); 
  return response.data;
}

export default UpdateBlogHandler;
