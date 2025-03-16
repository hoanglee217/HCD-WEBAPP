
import { UpdateCommentRequest, UpdateCommentResponse } from '../../../../constants/management/comment/UpdateCommentRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function UpdateCommentHandler(props: UpdateCommentRequest, id: string): Promise<UpdateCommentResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.put(`${apiUrl}/api/comments/${id}`, props);
  return response.data;
}

export default UpdateCommentHandler;
  