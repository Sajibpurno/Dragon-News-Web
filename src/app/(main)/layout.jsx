import BreakingNews from '@/Components/BreakingNews';
import Header from '@/Components/shared/Header';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;