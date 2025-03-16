
  import { CreateOptionRequest, CreateOptionResponse } from '../../../../constants/system/option/CreateOptionRequest';
  import useEnv from '../../../../hook/useEnv';
  import AxiosInstance from '../../../../utils/AxiosInstance';
  
  async function CreateOptionHandler(props: CreateOptionRequest): Promise<CreateOptionResponse> {
    const apiUrl = useEnv.apiUrl;
    const response = await AxiosInstance.post(`${apiUrl}/api/options`, props);
    return response.data;
  }
  
  export default CreateOptionHandler;
    