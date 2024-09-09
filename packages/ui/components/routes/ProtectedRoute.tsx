import React from 'react';
import { Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    readonly claims: string[];
}

export const ProtectedRoute = (props: React.PropsWithChildren<ProtectedRouteProps>) => {
    const { children } = props;
    return children ? children : <Outlet />;
};