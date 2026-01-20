import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Hero from "../sections/Hero";
import Navbar from "../Components/Layout/Navbar";
import Contact from "../sections/Contact";
import Footer from "../Components/Layout/Footer";

const Home =() =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default Home