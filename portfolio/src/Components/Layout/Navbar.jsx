import React from 'react'
import GradientText from '../../ui/GradientText'
import GooeyNav from '../../ui/GooeyNav'

const Navbar = () => {
    return (
        
        <nav className="w-full  fixed top-0 bg-transparent flex items-center px-6 z-50">
            {/* LEFT: Logo / Pressure Text */}
            <div className="flex-1 flex items-center justify-start">
                <span className="w-[60%] text-3xl" >
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={10}
                        showBorder={false}
                        className="custom-class"
                    >
                        Portfolio
                    </GradientText>
                </span>
            </div>

            {/* CENTER: Nav Links */}
            <div className="flex-1 flex items-center justify-center space-x-10 ">
                <a
                    href="/"
                    className="text-white  relative group"
                >
                    <span className="text-lg font-semibold relative z-10">HOME</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>

                <a
                    href="/project"
                    className=" text-white relative group"
                >
                    <span className="text-lg font-semibold relative z-10">PROJECT</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>

                <a
                    href="/about"
                    className="text-lg font-semibold text-white relative group"
                >
                    <span className="relative z-10">ABOUT</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
                <a
                    href="/about"
                    className="text-lg font-semibold text-white relative group"
                >
                    <span className="relative z-10">CONTACT</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
            </div>


            {/* RIGHT: Contact Button */}
            <div className="flex-1 flex items-center justify-end">
                <a
                    href="/contact"
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-red-600 transition"
                >
                    RESUME
                </a>
            </div>
        </nav>


    )
}

export default Navbar
