import React from 'react';
import Home from '../../pages/Home';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='w-full lg:w-1/2 mx-auto'>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
