import React from 'react';

const SignUpCompleted = () => { 
    document.title = "Sign Up Submitted";
    return(
        <div>
            <div className="min-h-screen flex justify-center  text-white m-auto">
                <div className="mt-40">
                    <div className="text-center px-4 sm:px-6 lg:px-8 space-y-6 mx-auto leading-loose basis-1/2">  
                        <div className="text-5xl sm:text-5xl lg:text-7xl font-bold p-4">You're all set!</div>
                        <h2 className="text-lg sm:text-xl lg:text-2xl">
                            You will be contacted by us with further information on scheduling your classes within 24-48 hours. We look forward to helping you get started on your learning journey!
                        </h2>
                    </div>

                </div>
            </div>
    </div>
    )
}

export default SignUpCompleted;