import axios from "axios";
import useEnv from "../../../hook/useEnv";
import { RefreshTokenRequest, RefreshTokenResponse } from "../../../constants";
import LogoutHandler from "./LogoutHandler";

async function RefreshTokenHandler(
  props: RefreshTokenRequest
): Promise<RefreshTokenResponse> {
  const apiUrl = useEnv.apiUrl;
  try {
    const response = await axios.put(`${apiUrl}/auth/refresh-token`, props);
    return response.data;
  } catch (error: any) {
    if (error.status === 401) {
      await LogoutHandler().then(() => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/';
      });
    };
    throw new Error("Failed to refresh token. Please log in again.");
  }
}

export default RefreshTokenHandler;
