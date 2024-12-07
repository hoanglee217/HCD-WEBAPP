import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const UnauthorizedRoute = () => {
  const { userId } = useAuth();
  return !userId ? <Outlet /> : <Navigate to="/" replace={true}/>;
};

export default UnauthorizedRoute;
