import { GetDetailBlogRequest, GetDetailBlogResponse } from "../../../../constants/management/blog/GetDetailBlogRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function GetDetailBlogHandler(props: GetDetailBlogRequest): Promise<GetDetailBlogResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.get(`${apiUrl}/api/blogs/${id}`,); 
  return response.data;
}

export default GetDetailBlogHandler;
