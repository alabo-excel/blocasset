import { React, useState } from "react";
import { Logo, Bar } from "./images"
import { motion } from "framer-motion"

const Nav = () => {
    const [responsive, setResponsive] = useState(true)
    const menuVariants = {
        opened: {
            display: ""
        },
        closed: {
            display: "none"
        }
    }
    return (
        <>
            <div className="p-4 lg:px-10 lg:flex text-sm bg-white z-10">
                <div className="lg:m-2 flex justify-between">
                    <img className="lg:w-auto w-32" src={Logo} alt="" />
                    <div
                        className="lg:hidden block">
                        <img onClick={() => setResponsive(state => !state)} className="w-5" src={Bar} alt="" />
                    </div>
                </div>
                <motion.div
                    className="lg:flex lg:w-screen"
                    initial={false}
                    variants={menuVariants}
                    animate={responsive ? "opened" : "closed"}
                >
                    <div className="lg:flex justify-evenly lg:w-96 border-gray-100 lg:border-l-2 lg:mx-8 lg:m-2">
                        <div className="lg:my-0 my-6">Images</div>
                        <div className="lg:my-0 my-6">Icons</div>
                        <div className="lg:my-0 my-6">Illustrations</div>
                        <div className="lg:my-0 my-6">Videos</div>
                    </div>
                    <div className="lg:ml-auto lg:flex lg:text-left text-center justify-between lg:w-96">
                        <div>
                            <input className="p-2 lg:w-auto w-60 border-gray-100 border-2 rounded-lg px-6" value="Become a contributor" type="button" />
                        </div>
                        <div>
                            <input className="p-2 px-6 bg-button lg:w-auto w-60 lg:my-0 my-4 text-white rounded-lg" value="Connect wallet" type="button" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Nav;