import React from "react";
import { Link } from "react-router-dom";
import cw_logo from '../../assets/images/cw_logos/cw_logo_black.png';
import instagram from '../../assets/images/social-handles/instagram.png';
import twitterx from '../../assets/images/social-handles/twitterx.png';
import facebook from '../../assets/images/social-handles/facebook.png';
import gmail from '../../assets/images/social-handles/gmail.png';


const Footer = () =>  {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col space-y-5 w-full justify-around items-center lg:flex-row basis-1/4 lg:max-xl:basis-1/6">
          <div className="flex flex-col w-full space-y-4 items-center md:flex-row">
            <div className="mx-auto">
              <Link to='/'> 
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={cw_logo} alt="cw logo"/>
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center space-x-10 mx-auto basis-1/2 lg:max-xl:basis-1/2">
              <a href="https://www.instagram.com/codewizdom/" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={instagram} alt="instagram"/>  
              </a>
              <a href="https://x.com/CodeWizdom" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={twitterx} alt="twitter-x" />  
              </a>
              <a href="https://www.facebook.com/profile.php?id=100071554127604" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={facebook} alt="facebook" />  
              </a>
              <a href="mailto:codewizdom@gmail.com" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={gmail} alt="email" />  
              </a>
            </div>
          </div>
          <nav className="flex flex-row space-x-8 mx-auto basis-1/4 lg:max-xl:basis-1/3 items-center justify-center">
            <Link to="/tutors" className="hover:underline text-violet-400 hover:text-violet-500">Our Tutors</Link>
            <Link to="/courses" className="hover:underline text-violet-400 hover:text-violet-500">Courses</Link>
            <Link to="/signup" className="hover:underline text-violet-400 hover:text-violet-500">Sign Up</Link>
          </nav>
      </div>
      <div className="mx-auto mt-4">
        <p className="">Code Wizdom © 2024</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;




