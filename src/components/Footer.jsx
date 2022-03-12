import React from 'react';
import { Logo, Twitter, Instagram, LinkedIn } from "./images"

const Footer = () => {
    return (
        <>
            <div className="flex sm:block p-10 sm:p-3 justify-between sm:text-xs">
                <div className="w-1/2 sm:w-full ">
                    <img src={Logo} alt="" />
                    <p className="text-sm my-2">High quality web3 vectors and designs  from top designers
                        all around the world.</p>
                    <div className="my-8 sm:flex">
                        <input className="border border-light p-3 rounded-lg h-11" type="text" placeholder="Your Email" />
                        <input className="bg-button text-white p-3 text-sm rounded-lg px-6" type="button" value="Email Me!" />
                    </div>
                </div>
                <div>
                    <div className="text-base">Channel</div>
                    <p className="text-sm my-2 text-text">Explore</p>
                    <p className="text-sm my-2 text-text">How it Works</p>
                    <p className="text-sm my-2 text-text">Contact Us</p>
                </div>
                <div>
                    <div className="text-base">Company</div>
                    <p className="text-sm my-2 text-text">Custom Work</p>
                    <p className="text-sm my-2 text-text">About</p>
                    <p className="text-sm my-2 text-text">FAQs</p>
                </div>
                <div>
                    <div className="text-base">Support</div>
                    <p className="text-sm my-2 text-text">Help center</p>
                    <p className="text-sm my-2 text-text">Terms of service</p>
                    <p className="text-sm my-2 text-text">Legal</p>
                    <p className="text-sm my-2 text-text">Privacy policy</p>
                </div>
            </div>
            <div className="text-sm flex justify-between p-5 border-t border-light mx-12 sm:mx-1">
                <p className="text-ash sm:text-xs">©2022 All Rights Reserved.</p>
                <div className="flex justify-between w-32 sm:w-20">
                    <img src={Twitter} className="sm:w-5 sm:h-5" alt="" />
                    <img src={Instagram} className="sm:w-5 sm:h-5" alt="" />
                    <img src={LinkedIn} className="sm:w-5 sm:h-5" alt="" />
                </div>
            </div>
        </>
    );
};

export default Footer;