import React from "react";
import Container from "../Components/Common/Container";
import Section from "../Components/Common/Section";

const Hero = () => {
    return (
            <div className="z-10 ">
            <Container>
                <div className=" w-[100%]  absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center px-6">

                        {/* Name */}
                        <h1
                            className="text-4xl md:text-6xl font-extrabold
              bg-white
              bg-clip-text text-transparent tracking-wide"
                        >
                            UNNIKRISHNAN P M
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-4 text-lg md:text-xl text-white">
                            Python Full Stack Developer | React | Django
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex justify-center gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-xl bg-indigo-600 text-white
                hover:bg-indigo-700 transition shadow-lg"
                            >
                                Download CV
                            </a>

                            <a
                                href="#contact"
                                className="px-6  py-3 rounded-xl border border-indigo-600
                text-indigo-600 hover:bg-indigo-600 hover:text-white
                transition"
                            >
                                Contact Me
                            </a>
                        </div>

                    </div>
                </div>
            </Container >
            </div>

    )
}

export default Hero