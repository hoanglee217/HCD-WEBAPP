import { CreateCategoryRequest, CreateCategoryResponse } from "../../../../constants/management/category/CreateCategoryRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function CreateCategoryHandler(props: CreateCategoryRequest): Promise<CreateCategoryResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.post(`${apiUrl}/api/categories`, props); 
  return response.data;
}

export default CreateCategoryHandler;
