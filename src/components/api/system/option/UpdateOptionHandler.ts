
import { UpdateOptionRequest, UpdateOptionResponse } from '../../../../constants/system/option/UpdateOptionRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function UpdateOptionHandler(props: UpdateOptionRequest, id: string): Promise<UpdateOptionResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.put(`${apiUrl}/api/options/${id}`, props);
  return response.data;
}

export default UpdateOptionHandler;
  