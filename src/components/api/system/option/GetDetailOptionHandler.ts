
import { GetDetailOptionRequest, GetDetailOptionResponse } from '../../../../constants/system/option/GetDetailOptionRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetDetailOptionHandler(props: GetDetailOptionRequest): Promise<GetDetailOptionResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.get(`${apiUrl}/api/options/${id}`);
  return response.data;
}

export default GetDetailOptionHandler;
  