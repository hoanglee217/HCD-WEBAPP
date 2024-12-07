import useEnv from "../../../hook/useEnv";
import AxiosInstance from "../../../utils/AxiosInstance";
import { RegisterRequest, RegisterResponse } from "../../../constants";

async function RegisterHandler(
  props: RegisterRequest
): Promise<RegisterResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.post(`${apiUrl}/auth/register`, props);
  return response.data;
}

export default RegisterHandler;
