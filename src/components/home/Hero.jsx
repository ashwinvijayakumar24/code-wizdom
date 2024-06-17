import React from "react";
import { Link } from "react-router-dom";
import hero_img from '../../assets/images/home/hero-2.jpeg';


const Hero = () => {
    return (
        <div style={{backgroundImage: `url(${hero_img})`}}className="min-h-screen flex items-center justify-center text-white m-auto ">
            <div className="mt-12">
                <div className="text-center px-4 space-y-6 m-auto leading-loose basis-1/2 w-full">  
                    <div className="text-4xl md:max-lg:text-5xl lg:text-6xl font-bold p-4">Personalized Programming Tutoring: Your Path to Coding Mastery!</div>
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Learn Python, JavaScript, Java, and more for <strong>FREE!</strong></h2>
                    <Link to='/courses'>
                        <button className="bg-violet-700 hover:bg-violet-800 active:bg-violet-900 focus:ring-violet-300 text-white font-bold py-3 px-6 rounded-lg text-center mt-8">
                            Get Started!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Hero;