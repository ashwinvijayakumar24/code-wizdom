import React from 'react';
import TutorsGrid from './TutorsGrid';

const Tutors = () => {
    document.title = "Tutors";
    return(
        <div>
            <div className="flex justify-center text-white m-auto">
                <div className="mt-40">
                    <div className="text-center px-4 space-y-6 w-5/6 m-auto leading-loose basis-1/2">  
                        <div className="text-5xl font-bold p-4">Our Tutors</div>
                        <h2 className="text-lg sm:text-xl lg:text-2xl">
                            At Code Wizdom, our team of tutors consists of experienced highschoolers who have a deep understanding of programming fundamentals.
                        </h2>
                    </div>
                </div>
            </div>
            <TutorsGrid/>
        </div>
    );
}

export default Tutors;