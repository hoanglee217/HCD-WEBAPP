import { NotFound } from '@hcd/ui';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={NotFound} />
            </Routes>
        </BrowserRouter>
    );
};