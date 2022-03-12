import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Release from '../components/Release';    
import SpecialsSection from "../components/SpecialsSection"
import HowItWorksSection from "../components/HowItWorksSection"
import FotersSection from "../components/Footer"
import JoinSection from '../components/JoinSection';

const home = () => {
    return (
        <div className="">
            <Hero />
            <Carousel />
            <Release />
            <SpecialsSection />
            <HowItWorksSection />
            <JoinSection />
            <FotersSection />
        </div>
    );
};

export default home;