import React from 'react';
import Home from '../../pages/Home';
import { Outlet } from 'react-router';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = () => {
    return (
        <div className='w-full lg:w-1/2 mx-auto px-4 lg:px-0 min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <main className='flex-1 px-3 lg:px-5'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
