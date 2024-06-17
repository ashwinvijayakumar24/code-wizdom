import React from 'react';
import { useNavigate } from 'react-router-dom';


const CourseCard = ({course}) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(course.link);
    };
    return (
        <div className=" mx-auto bg-violet-950 text-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer space-y-4" onClick={handleClick}>
            <div className="flex justify-center mb-4">
                <img src={course.image} alt="course logo" />
            </div>
            <h3 className="text-xl md:max-lg:text-2xl lg:text-3xl font-bold">{course.name}</h3>
            <p className=' text-md md:max-lg:text-lg lg:text-xl'>{course.description}</p>
      </div>
    );

}


export default CourseCard;