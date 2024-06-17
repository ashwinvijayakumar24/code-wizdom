import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    const emailData = {
        service_id: 'service_xo5e6ag',
        template_id: 'template_osatu8m',
        user_id: 'Uzk142ocs-NuvZNIb',
    };

    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/signup', formData)
        .then(response => console.log(response))
        .catch(err => console.log(err));
        navigate('/signup-completed')
        await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData, {
            headers: {
                'Content-Type': 'application/json'
            }
          })
          .then(response => console.log('mail is sent'))
          .catch(err => console.log(err))

    };


    return(
        <div className="text-white flex flex-col items-center justify-center p-8">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-5xl mb-12">
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-4">
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                        required
                        />
                    </div>
                    <div className="mb-4 flex flex-col justify-center space-y-4 p-4 bg-gray-700 text-gray-300 rounded-lg focus:outline-none">
                        <h4 style={{color: '#9CA3AF'}}>Which course(s) do you want to enroll in?</h4>
                        <div className='flex flex-row space-x-4'>
                            <input className="size-8" type="radio" name="course" value="Python" onChange={handleChange}/>
                            <span className='text-xl'>Python</span>
                        </div>
                        <div className='flex flex-row space-x-4'>
                            <input className="size-8" type="radio" name="course" value="Java" onChange={handleChange}/>
                            <span className='text-xl'>Java</span>
                        </div>
                        <div className='flex flex-row space-x-4'>
                            <input className="size-8" type="radio" name="course" value="HTML-CSS" onChange={handleChange}/>
                            <span className='text-xl'>HTML and CSS</span>
                        </div>
                        <div className='flex flex-row space-x-4'>
                            <input className="size-8" type="radio" name="course" value="JavaScript" onChange={handleChange}/>
                            <span className='text-xl'>JavaScript</span>
                        </div>
                        <div className='flex flex-row space-x-4'>
                            <input className="size-8" type="radio" name="course" value="ReactJS" onChange={handleChange}/>
                            <span className='text-xl'>ReactJS</span>
                        </div>
                        <div className='flex flex-row space-x-4'>
                            <input className="size-8" type="radio" name="sql" value="SQL" onChange={handleChange}/>
                            <span className='text-xl'>SQL</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="10"
                        placeholder="Any Questions, Comments, Concerns?"
                        className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-violet-700 hover:bg-violet-800 active:bg-violet-900 focus:ring-violet-300 text-white py-3 px-6 rounded-lg text-xl"
                            >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignUpForm;