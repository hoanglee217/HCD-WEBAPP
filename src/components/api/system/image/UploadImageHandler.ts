import { UploadImageRequest, UploadImageResponse } from '../../../../constants/system/image/UploadImageRequest';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function UploadImageHandler(props: UploadImageRequest): Promise<UploadImageResponse> {
  const apiUrl = useEnv.apiUrl;

  const formData = new FormData();
  formData.append("file", props.file);

  const response = await AxiosInstance.post(`${apiUrl}/api/images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export default UploadImageHandler;