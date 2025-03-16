
  import { CreateCommentRequest, CreateCommentResponse } from '../../../../constants/management/comment/CreateCommentRequest';
  import useEnv from '../../../../hook/useEnv';
  import AxiosInstance from '../../../../utils/AxiosInstance';
  
  async function CreateCommentHandler(props: CreateCommentRequest): Promise<CreateCommentResponse> {
    const apiUrl = useEnv.apiUrl;
    const response = await AxiosInstance.post(`${apiUrl}/api/comments`, props);
    return response.data;
  }
  
  export default CreateCommentHandler;
    