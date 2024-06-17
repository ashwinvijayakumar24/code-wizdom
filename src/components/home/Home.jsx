import React from "react";
import Hero from "./Hero";
import About from "./About";
import FeaturedCourses from "./FeaturedCourses";
import Contact from "../global/Contact";

export default function Home() {
    document.title = "Code Wizdom";
    return (
        <>
            <Hero />
            <About/>
            <FeaturedCourses/>
            <Contact/>
        </>
    )
}