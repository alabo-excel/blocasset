import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Daos, Nfts, Metaverse, Defi } from "./images"

const Carousel = () => {
    const responsive = {
        0: {
            items: 1.5,
        },
        700: {
            items: 3.2,
        },
        1000: {
            items: 4.3,
        }
    }
    return (
        <div className="mt-10 ml-10">
            <OwlCarousel responsive={responsive} className='owl-theme' nav={false} margin={20} loop dots={false}>
                <div className='item bg-black p-10 rounded-lg h-80'>
                    <h1 className="text-white text-2xl">DAOs</h1>
                    <div> <img className="h-44 mt-6" src={Daos} alt="" />
                    </div>
                </div>
                <div className='item bg-blue p-10 rounded-lg h-80'>
                    <h1 className="text-white text-2xl">NFTS</h1>
                    <div> <img className="h-44 mt-6" src={Nfts} alt="" />
                    </div>
                </div>
                <div className='item bg-black p-10 rounded-lg h-80'>
                    <h1 className="text-white text-2xl">Metaverse</h1>
                    <div> <img className="h-44 mt-6" src={Metaverse} alt="" />
                    </div>
                </div>
                <div className='item bg-green p-10 rounded-lg h-80'>
                    <h1 className="text-white text-2xl">DeFi</h1>
                    <div> <img className="h-44 mt-6" src={Defi} alt="" />
                    </div>
                </div>
                <div className='item bg-ash p-10 rounded-lg h-80'>
                    <h1 className="text-white text-2xl">Smart Contract</h1>
                    <div> <img className="h-44 mt-6" src={Defi} alt="" />
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Carousel;