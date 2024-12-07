export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
}
export interface RegisterResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}