
import { UpdateTagRequest, UpdateTagResponse } from '../../../../constants/management/tag/UpdateTagRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function UpdateTagHandler(props: UpdateTagRequest, id: string): Promise<UpdateTagResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.put(`${apiUrl}/api/tags/${id}`, props);
  return response.data;
}

export default UpdateTagHandler;
  