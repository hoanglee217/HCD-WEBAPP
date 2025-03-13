export interface LoginRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}
export interface LoginResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    refreshToken: string;
}