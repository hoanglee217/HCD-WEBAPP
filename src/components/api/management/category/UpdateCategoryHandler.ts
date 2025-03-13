import { UpdateCategoryRequest, UpdateCategoryResponse } from "../../../../constants/management/category/UpdateCategoryRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function UpdateCategoryHandler(props: UpdateCategoryRequest, id: string): Promise<UpdateCategoryResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.put(`${apiUrl}/api/categories/${id}`, props); 
  return response.data;
}

export default UpdateCategoryHandler;
