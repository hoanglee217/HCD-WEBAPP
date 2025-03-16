
import { DeleteImageRequest, DeleteImageResponse } from '../../../../constants/system/image/DeleteImageRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function DeleteImageHandler(props: DeleteImageRequest): Promise<DeleteImageResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.delete(`${apiUrl}/api/images/${id}`); 
  return response.data;
}

export default DeleteImageHandler;
  