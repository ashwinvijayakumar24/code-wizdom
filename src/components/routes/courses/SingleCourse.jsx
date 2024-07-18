import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../global/Contact';

const SingleCourse = ({course}) => {  
    document.title = course.name;
    return(
        <div>
            <div className="flex justify-center text-white m-auto">
                <div className="mt-40">
                    <div className="text-center px-4 space-y-6 w-5/6 m-auto leading-loose basis-1/2">  
                        <div className="text-5xl font-bold p-4">{course.name}</div>
                        <h2 className="text-lg md:max-lg:text-xl lg:text-2xl leading-10 lg:leading-10">
                            {course.description}
                        </h2>
                    </div>
                </div>
            </div>
            <div className=" text-white p-8 space-y-10">
                <div className="mx-auto flex flex-col gap-y-12">
                    <div className="space-y-8 text-center mt-12 flex flex-col items-center">
                        <div className='basis-1/2 space-y-4 bg-slate-800 rounded-lg p-8'>
                            <h1 className="text-xl md:max-lg:text-2xl lg:text-3xl font-bold">What is it?</h1>
                            <p className='text-md md:max-lg:text-lg lg:text-xl leading-10 lg:leading-10'>
                                {course.about}
                            </p>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <img src={course.image} alt="course logo" />
                        </div>
                    </div>
                    <div className="text-center space-y-8">
                        <h1 className="text-3xl md:text-4xl p-4 font-bold">Course Syllabus</h1>
                        <ul className="space-y-4 text-lg md:max-lg:text-xl lg:text-2xl bg-slate-700 rounded-lg w-fit p-8 mx-auto">
                            {course.syllabus.map((unit) => {
                                return(
                                    <li className='text-left'><strong>Unit {unit.unitNum} :</strong> {unit.unit}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <Link to='/signup'>
                        <button className="bg-violet-700 hover:bg-violet-800 active:bg-violet-900 focus:ring-violet-300 text-white py-6 px-6 rounded-lg font-bold text-center">
                            Sign Up for Free!
                        </button>
                    </Link>
                </div>
                <h3 className='text-xl md:max-lg:text-2xl lg:text-3xl text-white text-center  mx-auto'>
                    If you have any specific questions about our course, please use our contact form or email us at codewizdom@gmail.com
                </h3>
            </div>
            <Contact/>
        </div>
    )
}


export default SingleCourse;