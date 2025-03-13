import { DeleteBlogRequest, DeleteBlogResponse } from "../../../../constants/management/blog/DeleteBlogRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function DeleteBlogHandler(props: DeleteBlogRequest): Promise<DeleteBlogResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.delete(`${apiUrl}/api/blogs/${id}`); 
  return response.data;
}

export default DeleteBlogHandler;
