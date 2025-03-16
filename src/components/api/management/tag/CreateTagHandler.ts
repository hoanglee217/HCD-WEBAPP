
  import { CreateTagRequest, CreateTagResponse } from '../../../../constants/management/tag/CreateTagRequest';
  import useEnv from '../../../../hook/useEnv';
  import AxiosInstance from '../../../../utils/AxiosInstance';
  
  async function CreateTagHandler(props: CreateTagRequest): Promise<CreateTagResponse> {
    const apiUrl = useEnv.apiUrl;
    const response = await AxiosInstance.post(`${apiUrl}/api/tags`, props);
    return response.data;
  }
  
  export default CreateTagHandler;
    