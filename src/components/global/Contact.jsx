import {useState} from 'react';
import axios from 'axios';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
    const emailData = {
        service_id: 'service_xo5e6ag',
        template_id: 'template_5itq4dk',
        user_id: 'Uzk142ocs-NuvZNIb',
    };
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitted(true);
      await axios.post('https://code-wizdom.onrender.com/contact', formData)
      .then(response => console.log(response))
      .catch(err => console.log(err));
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData, {
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => console.log('mail is sent'))
      .catch(err => console.log(err))
    };
    
    return (
        <div className=" text-white flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold space-y-8 mt-12">Contact Us</h2>
            <div className="bg-gray-900 p-8 rounded-lg w-5/6 mx-auto m-10">
            { submitted ? ( 
              <h2 className="text-center text-xl font-bold">Thank you for submitting. We will respond as soon as possible!</h2>
            ) : (
                  <form onSubmit={handleSubmit} method="POST" autocomplete="off">
                      <div className="mb-4">
                          <input
                          type="text"
                          name="name"
                          value = {formData.name}
                          onChange={handleChange}
                          autoComplete='off'
                          placeholder="Name"
                          className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                          />
                      </div>
                      <div className="mb-4">
                          <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete='off'
                          placeholder="Email"
                          className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg focus:outline-none"
                          />
                      </div>
                      <div className="mb-4">
                          <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          autoComplete='off'
                          rows="10"
                          placeholder="What do you want to tell us today?"
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
            )
            }
            </div>
        </div>
    )
}

export default Contact;