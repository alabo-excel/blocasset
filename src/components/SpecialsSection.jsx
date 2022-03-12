import React from 'react';
import { Arrows } from "./images"
import "./styles.css"

const SpeciaslSection = () => {
    return (
        <div className="bg-lightBg py-14 my-20">
            <div className="text-center my-8">
                <p className="text-red text-base">Specially collected</p>
                <h1 className="text-3xl font-button">Blocasset specials</h1>
            </div>
            <div className="flex sm:block justify-evenly sm:p-3">
                <div className="pattern w-2/5 sm:w-full p-10 text-white rounded-lg">
                    <div>
                        <h1 className="text-3xl w-80">Patterns and backgrounds</h1>
                        <p className="flex">View collection <img className="h-3 ml-2 mt-2 w-1" src={Arrows} alt="" /> </p>
                    </div>
                </div>
                <div className="assets w-2/5 sm:w-full sm:my-3 p-10 text-white rounded-lg">
                    <div>
                        <h1 className="text-3xl w-80">NFTs and DeFi assets</h1>
                        <p className="flex">View collection <img className="h-3 ml-2 mt-2 w-1" src={Arrows} alt="" /> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeciaslSection;