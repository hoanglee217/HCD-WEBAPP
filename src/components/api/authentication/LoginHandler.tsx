import useEnv from "../../../hook/useEnv";
import AxiosInstance from "../../../utils/AxiosInstance";
import { LoginRequest, LoginResponse } from "../../../constants";

async function LoginHandler(props: LoginRequest): Promise<LoginResponse> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.post(`${apiUrl}/auth/login`, props);
  return response.data;
}

export default LoginHandler;
