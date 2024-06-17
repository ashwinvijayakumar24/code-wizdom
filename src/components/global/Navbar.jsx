import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cw_logo from '../../assets/images/cw_logos/cw_logo_transparent.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 

  

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center max-w-full px-4">
        <div>
          <Link to='/' className='hidden md:block'>
            <img className="size-28" src={cw_logo} alt="cw logo" />
          </Link>
          <a href='/' onClick={isOpen ? toggleMenu : null} className='block md:hidden'>
            <img className="size-28" src={cw_logo} alt="cw logo" />
          </a>
        </div>
        <div className="hidden md:flex space-x-12 mr-8">
          <Link to="/tutors" className="hover:underline px-4 py-2 ">Our Tutors</Link>
          <Link to="/courses" className="hover:underline px-4 py-2 ">Courses</Link>
          <Link to="/signup" className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 ">Sign Up!</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 pb-4 bg-black">
            <a href="/tutors" onClick={toggleMenu} className="hover:underline px-4 py-2">Our Tutors</a>
            <a href="/courses" onClick={toggleMenu}className="hover:underline px-4 py-2">Courses</a>
            <a href="/signup"   onClick={toggleMenu} className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

