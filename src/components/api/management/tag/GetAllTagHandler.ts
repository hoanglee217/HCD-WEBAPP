
import { GetAllTagResponse } from '../../../../constants/management/tag/GetAllTagRequest';
import useEnv from '../../../../hook/useEnv';
import { IPaginationMeta } from '../../../../interfaces/IPagination';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetAllTagHandler(props: IPaginationMeta): Promise<GetAllTagResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.get(`${apiUrl}/api/tags`, { params: props });
  return response.data;
}

export default GetAllTagHandler;
  