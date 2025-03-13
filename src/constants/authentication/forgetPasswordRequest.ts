export interface forgetPasswordRequest {
    password: string;
}
export interface forgetPasswordResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    refreshToken: string;
}