import React from 'react';
import Home from '../../pages/Home';
import { Outlet } from 'react-router';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = () => {
    return (
        <div className='w-full lg:w-1/2 mx-auto px-4 lg:px-0'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
