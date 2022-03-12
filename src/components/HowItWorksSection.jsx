import React from 'react';
import { Line, Search, Dollar, Download } from "./images"

const HowItWorksSection = () => {
    return (
        <>
        <div className="mx-10 sm:m-3">
            <div className="text-center my-20 relative">
                <h1 className="text-3xl">How it works</h1>
                <img className="absolute top-0 lg:right-80 md:right-52" src={Line} alt="" />
            </div>
            <div className="flex sm:block justify-between">
                <div className="bg-lightBg rounded-lg text-center p-6 m-2 w-full">
                    <img alt="" className="mx-auto md:w-12" src={Search} />
                    <h6 className="lg:text-lg font-bold my-2 md:text-base">Find asset</h6>
                    <p className="md:text-sm">Browse assets from the different available categories and find what fit your project(s) perfectly. </p>
                </div>
                <div className="bg-lightBg rounded-lg text-center p-6 m-2 w-full">
                    <img alt="" className="mx-auto  md:w-12" src={Dollar} />
                    <h6 className="lg:text-lg font-bold my-2  md:text-base">Connect wallet</h6>
                    <p className="md:text-sm">Easily connect your blockchain wallet to our app to pay for your favourite  web3 assets. </p>
                </div>
                <div className="bg-lightBg rounded-lg text-center p-6 m-2 w-full">
                    <img alt="" className="mx-auto  md:w-12" src={Download} />
                    <h6 className="lg:text-lg font-bold my-2  md:text-base">Download asset</h6>
                    <p className="md:text-sm">Download the required asset(s) in a single click. Assets come in a very high quality form so you need not worry about quality. </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default HowItWorksSection;