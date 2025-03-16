
  import { CreateImageRequest, CreateImageResponse } from '../../../../constants/system/image/CreateImageRequest';
  import useEnv from '../../../../hook/useEnv';
  import AxiosInstance from '../../../../utils/AxiosInstance';
  
  async function CreateImageHandler(props: CreateImageRequest): Promise<CreateImageResponse> {
    const apiUrl = useEnv.apiUrl;
    const response = await AxiosInstance.post(`${apiUrl}/api/images`, props);
    return response.data;
  }
  
  export default CreateImageHandler;
    