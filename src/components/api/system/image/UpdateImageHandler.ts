
import { UpdateImageRequest, UpdateImageResponse } from '../../../../constants/system/image/UpdateImageRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function UpdateImageHandler(props: UpdateImageRequest, id: string): Promise<UpdateImageResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.put(`${apiUrl}/api/images/${id}`, props);
  return response.data;
}

export default UpdateImageHandler;
  