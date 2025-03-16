
import { GetDetailCommentRequest, GetDetailCommentResponse } from '../../../../constants/management/comment/GetDetailCommentRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetDetailCommentHandler(props: GetDetailCommentRequest): Promise<GetDetailCommentResponse> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.get(`${apiUrl}/api/comments/${id}`);
  return response.data;
}

export default GetDetailCommentHandler;
  