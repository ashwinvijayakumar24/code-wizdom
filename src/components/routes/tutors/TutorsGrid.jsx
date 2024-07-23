import React from 'react';
import tutors from './TutorData';


const TutorsGrid = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white p-12">
                {tutors.map((tutor, index) => (
                        <div className="text-center rounded-lg bg-violet-950  mx-auto p-6 space-y-4" key={index}>
                                <img
                                    src={tutor.image}
                                    alt="tutor"
                                    className="mx-auto size-48 md:max-xl:size-64 xl:size-72 rounded-lg"
                                />
                                <h3 className="text-2xl font-bold">{tutor.name}</h3>
                                <h5 className="text-xl font-bold">{tutor.role}</h5>
                                <p>
                                    {tutor.grade} at {tutor.school}
                                </p>
                        </div>

                ))}
        </div>
    )
}


export default TutorsGrid;