import { GetAllCategoryResponse } from "../../../../constants/management/category/GetAllCategoryRequest";
import useEnv from "../../../../hook/useEnv";
import { IPaginationMeta } from "../../../../interfaces/IPagination";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function GetAllCategoryHandler(props: IPaginationMeta): Promise<GetAllCategoryResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.get(`${apiUrl}/api/categories`, {params: props});
  return response.data;
}

export default GetAllCategoryHandler;
