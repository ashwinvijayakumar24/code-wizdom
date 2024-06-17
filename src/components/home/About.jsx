import React from 'react';
import about_img_1 from '../../assets/images/home/about-img-1.jpeg';
import check from '../../assets/images/home/checked.png';

const About = () => {
    return(
        <div className=" text-white flex flex-col items-center justify-around">
          <div className="text-center mb-12 mt-12">
            <h1 className="text-2xl md:max-lg:text-3xl lg:text-4xl font-bold space-x-4 p-4">Welcome to Code Wizdom</h1>
            <p className="text-lg md:max-lg:text-xl lg:text-2xl w-5/6 mx-auto">
              We provide free personalized one-on-one coding tutoring to help you master programming skills quickly and efficiently. Whether you're a beginner or looking to advance your skills, our expert tutors are here to guide you every step of the way.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 max-w-6xl mb-8">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
              <h2 className="text-2xl md:max-lg:text-3xl lg:text-4xl font-bold mb-4 p-4 w-fit mx-auto">Our Sessions</h2>
              <ul className="list-none space-y-4 w-fit mx-auto">
                <li className="flex items-center text-lg md:max-lg:text-xl lg:text-2xl space-x-8">
                  <img className="inline-block rounded-full" src={check} alt="check-icon" />
                  <strong>100% FREE!</strong>
                </li>
                <li className="flex items-center text-lg md:max-lg:text-xl lg:text-2xl space-x-8">
                  <img className="inline-block rounded-full" src={check} alt="check-icon" />
                  <p>Flexible Scheduling</p>
                </li>
                <li className="flex items-center text-lg md:max-lg:text-xl lg:text-2xl space-x-8">
                  <img className="inline-block rounded-full" src={check} alt="check-icon" />
                  <p>Expert Tutors</p>
                </li>
                <li className="flex items-center text-lg md:max-lg:text-xl lg:text-2xl space-x-8">
                  <img className="inline-block rounded-full" src={check} alt="check-icon" />
                  <p>Variety of Courses</p>
                </li>
                <li className="flex items-center text-lg md:max-lg:text-xl lg:text-2xl space-x-8">
                  <img className="inline-block rounded-full" src={check} alt="check-icon" />
                  <p>Fully Virtual</p>
                </li>
              </ul>
            </div>
            <div className="w-3/4 mx-auto rounded-lg overflow-y-hidden ">
                <img src={about_img_1} alt="about-img-1" />
            </div>
          </div>
        </div>
    )
}

export default About;