import { GetDetailCategoryRequest, GetDetailCategoryResponse } from "../../../../constants/management/category/GetDetailCategoryRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function GetDetailCategoryHandler(props: GetDetailCategoryRequest): Promise<GetDetailCategoryResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.get(`${apiUrl}/api/categories/${id}`,); 
  return response.data;
}

export default GetDetailCategoryHandler;
