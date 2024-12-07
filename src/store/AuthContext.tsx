import { toast } from "react-toastify";
import { createContext, useContext, ReactNode, useState } from "react";
import { LoginRequest, RegisterRequest } from "../constants";
import LoginHandler from "../components/api/authentication/LoginHandler";
import RegisterHandler from "../components/api/authentication/RegisterHandler";
import LogoutHandler from "../components/api/authentication/LogoutHandler";

type AuthContextType = {
  userId: string | null;
  logout: () => void;
  login: (LoginRequest: LoginRequest) => void;
  register: (RegisterRequest: RegisterRequest) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));

  const login = async (props: LoginRequest) => {
    const response = await LoginHandler({
      email: props.email,
      password: props.password
    });
    toast.success("Login successfully!!");

    // Store token in localStorage
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("refreshToken", response.refreshToken);
    localStorage.setItem("userId", response.id);
    setUserId(response.id);
  };

  const register = async (props: RegisterRequest) =>{
    await RegisterHandler({
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phoneNumber: props.phoneNumber,
      password: props.password
    });

    toast.success("Register successfully!!");
  }

  const logout = async () => {
    await LogoutHandler();
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
