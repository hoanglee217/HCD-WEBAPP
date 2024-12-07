async function LogoutHandler() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");
}

export default LogoutHandler;
