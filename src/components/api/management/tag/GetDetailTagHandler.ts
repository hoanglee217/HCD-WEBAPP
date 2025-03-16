
import { GetDetailTagRequest, GetDetailTagResponse } from '../../../../constants/management/tag/GetDetailTagRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetDetailTagHandler(props: GetDetailTagRequest): Promise<GetDetailTagResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.get(`${apiUrl}/api/tags/${id}`);
  return response.data;
}

export default GetDetailTagHandler;
  