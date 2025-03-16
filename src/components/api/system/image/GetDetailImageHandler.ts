
import { GetDetailImageRequest, GetDetailImageResponse } from '../../../../constants/system/image/GetDetailImageRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetDetailImageHandler(props: GetDetailImageRequest): Promise<GetDetailImageResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.get(`${apiUrl}/api/images/${id}`);
  return response.data;
}

export default GetDetailImageHandler;
  