import React from 'react';
import { RightArrow, HandTop, HandBottom, Img1, Img2, Img3, Img4, Avatar1 } from './images'

const JoinSection = () => {
    return (
        <div className='lg:px-12 md:px-6 sm:px-2 my-20 relative'>
            <div className="text-center my-20 ">
                <p className="text-red text-base">Join the network</p>
                <div className="text-3xl sm:text-xl font-button lg:w-1/2 md:w- lg:mx-auto md:mx-6">Monetize your skills, upload your Web3 assets and get paid immediately  in crypto</div>
                <div className="">
                    <button className="bg-button flex p-3 rounded-lg text-white px-5 mx-auto my-10">
                        Become a Blocributor
                        <img className="h-2 my-auto ml-3" alt="" src={RightArrow} />
                    </button>
                </div>
                <img className="absolute lg:top-10 h-24 md:-top-20 left-32 sm:-top-5 sm:left-20" alt="" src={HandBottom} />
            </div>

            <div className='flex sm:block justify-between relative'>
                <div className="mx-2">
                    <div>
                        <img src={Img1} className="sm:w-screen" alt="" />
                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="flex">
                            <img className="w-10" src={Avatar1} alt="" />
                            <div className="pl-2">
                                <p className="text-sm text-ash">@ummiweb</p>
                                <p className="text-xs text-text">3D Designer</p>
                            </div>
                        </div>
                        <p className="text-orange text-sm">follow</p>
                    </div>
                </div>
                <div className="lg:mt-10 md:mt-4 mx-2 sm:my-4">
                    <div>
                        <img src={Img2} className="sm:w-screen" alt="" />
                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="flex">
                            <img className="w-10" src={Avatar1} alt="" />
                            <div className="pl-2">
                                <p className="text-sm text-ash">@comradeglry</p>
                                <p className="text-xs text-text">Motion Designer</p>
                            </div>
                        </div>
                        <p className="text-orange text-sm">follow</p>
                    </div>
                </div>
                <div className="lg:mt-6 md:-mt-4 mx-2">
                    <div>
                        <img src={Img3} alt="" />
                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="flex">
                            <img className="w-10" src={Avatar1} alt="" />
                            <div className="pl-2">
                                <p className="text-sm text-ash">@psalmos</p>
                                <p className="text-xs text-text">Photographer</p>
                            </div>
                        </div>
                        <p className="text-orange text-sm">follow</p>
                    </div>
                </div>
                <div className="mx-2 lg:block md:hidden sm:hidden">
                    <div>
                        <img src={Img4} alt="" />
                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="flex">
                            <img className="w-10" src={Avatar1} alt="" />
                            <div className="pl-2">
                                <p className="text-sm text-ash">@davide</p>
                                <p className="text-xs text-text">Illustrator</p>
                            </div>
                        </div>
                        <p className="text-orange text-sm">follow</p>
                    </div>
                </div>
                <div className="absolute lg:top-96 lg:right-40 md:right-8 md:top-72 sm:hidden">
                    <img className="h-24" src={HandTop} alt="" />
                </div>
            </div>
        </div>
    );
};

export default JoinSection;