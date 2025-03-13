import { GetAllBlogResponse } from "../../../../constants/management/blog/GetAllBlogRequest";
import useEnv from "../../../../hook/useEnv";
import { IPaginationMeta } from "../../../../interfaces/IPagination";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function GetAllBlogHandler(props: IPaginationMeta): Promise<GetAllBlogResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.get(`${apiUrl}/api/blogs`, {params: props});
  return response.data;
}

export default GetAllBlogHandler;
