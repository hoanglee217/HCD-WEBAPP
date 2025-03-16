
import { DeleteCommentRequest, DeleteCommentResponse } from '../../../../constants/management/comment/DeleteCommentRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function DeleteCommentHandler(props: DeleteCommentRequest): Promise<DeleteCommentResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.delete(`${apiUrl}/api/comments/${id}`); 
  return response.data;
}

export default DeleteCommentHandler;
  