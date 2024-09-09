/// <reference types="vite/client" />

export const env = {
    AUTH_OPENID_AUTHORITY: import.meta.env.VITE_IDENTITY_SERVER,
    VITE_IDENTITY_CLIENT: import.meta.env.VITE_IDENTITY_CLIENT,
    AUTH_MANAGEMENT_SERVER: import.meta.env.VITE_MANAGEMENT_SERVER,
    GOOGLE_MAPS_API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
};
