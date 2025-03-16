
import { GetAllCommentResponse } from '../../../../constants/management/comment/GetAllCommentRequest';
import useEnv from '../../../../hook/useEnv';
import { IPaginationMeta } from '../../../../interfaces/IPagination';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetAllCommentHandler(props: IPaginationMeta): Promise<GetAllCommentResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.get(`${apiUrl}/api/comments`, { params: props });
  return response.data;
}

export default GetAllCommentHandler;
  