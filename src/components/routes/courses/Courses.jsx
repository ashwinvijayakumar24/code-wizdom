import React from 'react';
import CoursesGrid from './CoursesGrid';


const Courses = () => {  
    document.title = "Courses";

    return(
        <div>
            <div className="flex justify-center  text-white m-auto">
                <div className="mt-40">
                    <div className="text-center px-4 space-y-6 w-5/6 m-auto leading-loose basis-1/2">  
                        <div className="text-5xl font-bold p-4">Our Courses</div>
                        <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">
                            At Code Wizdom, we offer a variety of courses, ranging from web design to multi-purpose programming
                        </h2>
                        <h3 className='text-md md:max-lg:text-lg lg:text-xl'>Click on a course to learn more!</h3>
                    </div>
                </div>
            </div>
            <CoursesGrid/>
        </div>
    );
}

export default Courses;