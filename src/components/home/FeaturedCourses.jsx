import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../routes/courses/CourseData';

const FeaturedCourses = () => {
    return(
        <div className="text-white py-16 ">
            <h2 className="text-center text-4xl font-bold mb-12 p-4">Featured Courses</h2>
            <div className=" mx-auto grid grid-cols-1 md:max-xl:grid-cols-2 xl:grid-cols-4 gap-8 overflow-y-hidden">
                {courses.slice(0,4).map((course) => (
                        <div className="text-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer w-5/6 mx-auto" key={course.id}>
                            <Link to={`courses${course.link}`}>
                                <img
                                    src={course.image}
                                    alt="course logo"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                                <p>
                                    {course.description}
                                </p>
                            </Link>
                        </div>

                ))}
            </div>
            <div className='flex w-fit text-center m-auto'>
                <Link to='/courses'><p className='text-sm text-violet-400  mt-4 underline hover:text-violet-500'>More Courses</p></Link>
            </div>
            <div className="flex justify-center mt-12">
                <Link to='/signup'>
                    <button className="bg-violet-700 hover:bg-violet-800 active:bg-violet-900 focus:ring-violet-300 text-white py-6 px-6 rounded-lg font-bold text-center">
                        Sign Up for Free!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses;