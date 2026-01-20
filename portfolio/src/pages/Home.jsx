import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Hero from "../sections/Hero";
import Navbar from "../Components/Layout/Navbar";

const Home =() =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        </>
    )
}
export default Home