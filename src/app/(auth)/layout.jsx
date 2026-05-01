import React from 'react';
import Navbar from '@/Components/shared/Navbar';
import { montserrat } from '../layout';
const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;