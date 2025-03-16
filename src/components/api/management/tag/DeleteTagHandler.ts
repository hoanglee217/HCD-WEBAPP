
import { DeleteTagRequest, DeleteTagResponse } from '../../../../constants/management/tag/DeleteTagRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function DeleteTagHandler(props: DeleteTagRequest): Promise<DeleteTagResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.delete(`${apiUrl}/api/tags/${id}`); 
  return response.data;
}

export default DeleteTagHandler;
  