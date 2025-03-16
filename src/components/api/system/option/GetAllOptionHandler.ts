
import { GetAllOptionResponse } from '../../../../constants/system/option/GetAllOptionRequest';
import useEnv from '../../../../hook/useEnv';
import { IPaginationMeta } from '../../../../interfaces/IPagination';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetAllOptionHandler(props: IPaginationMeta): Promise<GetAllOptionResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.get(`${apiUrl}/api/options`, { params: props });
  return response.data;
}

export default GetAllOptionHandler;
  