
import { DeleteOptionRequest, DeleteOptionResponse } from '../../../../constants/system/option/DeleteOptionRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function DeleteOptionHandler(props: DeleteOptionRequest): Promise<DeleteOptionResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.delete(`${apiUrl}/api/options/${id}`); 
  return response.data;
}

export default DeleteOptionHandler;
  