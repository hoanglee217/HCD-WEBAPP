
import { GetAllImageResponse } from '../../../../constants/system/image/GetAllImageRequest';
import useEnv from '../../../../hook/useEnv';
import { IPaginationMeta } from '../../../../interfaces/IPagination';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetAllImageHandler(props: IPaginationMeta): Promise<GetAllImageResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.get(`${apiUrl}/api/images`, { params: props });
  return response.data;
}

export default GetAllImageHandler;
  