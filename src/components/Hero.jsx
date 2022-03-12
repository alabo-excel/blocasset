import React from 'react';
import "./styles.css"
import { Bitcoin, Etherum } from "./images"


const Hero = () => {
    return (
        <>
            <div className='hero relative px-4'>
                <div className="md:w-6/12 mx-auto md:py-32 md:py-20 pt-10 text-center">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl">
                        Discover, and sell
                        unique web3 assets.</h1>
                    <p className="lg:w-8/12 mx-auto my-4 lg:text-base text-sm">
                        Make your project eye-catching with awesome web3 assets.
                        For both commercial and personal purposes.
                    </p>
                    <div className="mt-8 flex">
                        <select className="select rounded-tl-lg rounded-bl-lg px-2">
                            <option>Images</option>
                        </select>
                        <input className="input lg:w-screen w-full" type="text" placeholder="Search all Images" />
                        <button className="button rounded-tr-lg rounded-br-lg"><i className="fa-solid fa-magnifying-glass px-3"></i></button>
                    </div>
                    <p className='lg:text-sm text-xs text-gray-800 my-2'>Popular:   nft,  web3,  stickers,  icons,  cryptocurrency</p>
                </div>
                <div className=" md:block sm:hidden">
                    <img className='absolute top-16 left-20 lg:w-40 md:w-32' src={Etherum} alt="" />
                    <img className='absolute top-52 right-20 lg:w-40 md:w-32' src={Bitcoin} alt="" />
                </div>
            </div>
        </>
    );
};

export default Hero;