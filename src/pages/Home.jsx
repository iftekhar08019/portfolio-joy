import React from 'react';
import Hero from '../components/common/Hero';
import WorkEdu from '../components/common/WorkEdu';
import { Outlet } from 'react-router';
import FeatureProjects from '../components/common/FeatureProjects';
import Skill from '../components/common/Skill';

const Home = () => {
    return (
        <div className='container mx-auto px-4'>
            <Hero></Hero>
            <WorkEdu></WorkEdu>
            <Skill></Skill>
            <FeatureProjects></FeatureProjects>
        </div>
    );
};

export default Home;
