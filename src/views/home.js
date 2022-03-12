import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Release from '../components/Release';

const home = () => {
    return (
        <div className="">
            <Hero />
            <Carousel />
            <Release />
        </div>
    );
};

export default home;