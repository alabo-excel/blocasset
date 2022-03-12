import React from 'react';
import { Line, Sunrise, Polygon, Avatar, More, Heart, Share, Save } from "./images"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./styles.css"
const Release = () => {
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
    let n = 8
    if (window.innerWidth <= 980) {
        n = 6
    }
    if (window.innerWidth <= 600) {
        n = 4
    }
    return (
        <>
            <div className="px-8 sm:px-3">
                <div className="text-center mt-20 mb-20 relative">
                    <h1 className="text-4xl">New Releases</h1>
                    <p className="text-ash text-sm my-4">Newly minted assets from top artists around the world</p>
                    <img className="absolute lg:top-6 lg:left-80 md:top-2 md:left-32 sm:-top-8" src={Line} alt="" />
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                    {
                        [...Array(n)].map((e, i) => <div key={i} className="bg-lightBg w-full rounded-md border border-light m-1 my-5 sm:my-1">
                            <div className="p-3 relative">
                                <img src={Sunrise} alt="" className="w-full" />
                                <div className="absolute top-6 right-6">
                                    <img className="my-1 w-3 mx-auto" src={More} alt="" />
                                    <img className="my-3 w-4" src={Heart} alt="" />
                                    <img className="my-3 w-4" src={Share} alt="" />
                                    <img className="my-3 w-4" src={Save} alt="" />

                                </div>
                                <div className="text-lg my-1">Sunrise set megaverse</div>
                            </div>
                            <div className="flex justify-between border-b border-light px-3 pb-2">
                                <div>
                                    <p className="text-sm">0.34 Matic</p>
                                    <p className="text-xs">$200</p>
                                </div>
                                <img className="h-8" src={Polygon} alt="" />
                            </div>
                            <div className="flex p-2">
                                <img src={Avatar} alt="" />
                                <p className="text-sm my-auto mx-3">@uresiu23</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className="my-8 text-center">
                    <input className="p-2 px-8 border text-sm border-light rounded-md" type="button" value="Load more" />
                </div>
            </div>
            <div className="text-center mt-32 mb-20 relative">
                <h1 className="text-4xl">Trending</h1>
                <p className="text-ash text-sm my-4">Newly minted assets from top artists around the world</p>
                <img className="absolute top-6 right-80" src={Line} alt="" />
            </div>
            <OwlCarousel responsive={responsive} className='owl-theme' nav={false} margin={20} loop dots={false}>
                {
                    [...Array(n)].map((e, i) => <div key={i} className="bg-lightBg lg:w-72 rounded-md border border-light m-1">
                        <div className="p-3 relative">
                            <img src={Sunrise} alt="" />
                            <div className="absolute top-6 right-6">
                                <img className="my-1 w-3 mx-auto" src={More} alt="" />
                                <img className="my-3 w-3" src={Heart} alt="" />
                                <img className="my-3 w-3" src={Share} alt="" />
                                <img className="my-3 w-3" src={Save} alt="" />

                            </div>
                            <div className="text-lg my-1">Sunrise set megaverse</div>
                        </div>
                        <div className="flex justify-between border-b border-light px-3 pb-2">
                            <div>
                                <p className="text-sm">0.34 Matic</p>
                                <p className="text-xs">$200</p>
                            </div>
                            <img className="h-8" src={Polygon} alt="" />
                        </div>
                        <div className="flex p-2">
                            <img className="h-8" src={Avatar} alt="" />
                            <p className="text-sm my-auto mx-3">@uresiu23</p>
                        </div>
                    </div>)
                }
            </OwlCarousel>
        </>
    );
};

export default Release;