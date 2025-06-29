import React from 'react';
import Hero from '../components/common/Hero';
import WorkEdu from '../components/common/WorkEdu';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='container mx-auto px-4'>
            <Hero></Hero>
            <WorkEdu></WorkEdu>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
