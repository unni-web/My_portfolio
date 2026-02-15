import React from 'react'
import GradientText from '../../ui/GradientText'
import GooeyNav from '../../ui/GooeyNav'

const Navbar = () => {
    return (

        <nav className="w-full  fixed top-0 bg-transparent flex items-center px-6 z-50 bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-2">
            {/* LEFT: Logo / Pressure Text */}
            <div className="flex-1 flex items-center justify-start">
                <span className="w-[60%] text-2xl" >
                    <GradientText
                        colors={["#ffffff", "indigo", "#ffffff", "indigo", "#ffffff"]}
                        animationSpeed={10}
                        showBorder={false}
                        className="custom-class"
                    >
                        Portfolio
                    </GradientText>
                </span>
            </div>

            {/* CENTER: Nav Links */}
            <div className="flex-1 flex items-center justify-center space-x-10  ">
                <a
                    href="/"
                    className="text-white  relative group"
                >
                    <span className="text-lg  relative z-10">Home</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>

                <a
                    href="#about"
                    className="text-lg  text-white relative group"
                >
                    <span className="relative z-10">About</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>
                <a
                    href="#skills"
                    className=" text-white relative group"
                >
                    <span className="text-lg  relative z-10">Skills</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>
                 <a
                    href="#projects"
                    className=" text-white relative group"
                >
                    <span className="text-lg  relative z-10">Project</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>

                <a
                    href="#contact"
                    className="text-lg  text-white relative group"
                >
                    <span className="relative z-10">Contact</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>
            </div>


            {/* RIGHT: Contact Button */}
            <div className="flex-1 flex items-center justify-end">
                <a
                    href="/resume.pdf"
                    className="px-3 py-2 bg-indigo-700 text-white  rounded-xl hover:bg-indigo-600 transition"
                >
                    Download CV
                </a>
            </div>
        </nav>


    )
}

export default Navbar

