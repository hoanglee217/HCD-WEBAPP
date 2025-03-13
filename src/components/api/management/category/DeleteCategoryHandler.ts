import { DeleteCategoryRequest, DeleteCategoryResponse } from "../../../../constants/management/category/DeleteCategoryRequest";
import useEnv from "../../../../hook/useEnv";
import AxiosInstance from "../../../../utils/AxiosInstance";

async function DeleteCategoryHandler(props: DeleteCategoryRequest): Promise<DeleteCategoryResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.delete(`${apiUrl}/api/categories/${id}`); 
  return response.data;
}

export default DeleteCategoryHandler;
