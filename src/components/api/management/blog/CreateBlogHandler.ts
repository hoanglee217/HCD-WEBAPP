import { CreateBlogRequest, CreateBlogResponse } from "../../../../constants/management/blog/CreateBlogRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function CreateBlogHandler(props: CreateBlogRequest): Promise<CreateBlogResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.post(`${apiUrl}/api/categories`, props); 
  return response.data;
}

export default CreateBlogHandler;
