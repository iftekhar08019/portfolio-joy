import React from 'react';
import Home from '../../pages/Home';
import { Outlet } from 'react-router';
import Navbar from '../common/Navbar';

const MainLayout = () => {
    return (
        <div className='w-full lg:w-1/2 mx-auto'>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
