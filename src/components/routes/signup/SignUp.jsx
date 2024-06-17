import React from 'react';
import SignUpForm from './SignUpForm';

const SignUp = () => { 
    document.title = "Sign Up";
    return(
        <div>
            <div className="flex justify-center text-white m-auto">
                <div className="mt-40">
                    <div className="text-center px-4 space-y-6  mx-auto leading-loose basis-1/2">  
                        <div className="text-5xl font-bold p-4">Sign Up</div>
                        <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">
                            Please complete the following form to sign up for one of our courses! 
                        </h2>
                    </div>
                </div>
            </div>
            <SignUpForm/>
        </div>
    );
}

export default SignUp;