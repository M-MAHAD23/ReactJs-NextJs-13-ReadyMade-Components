import React, { useState } from 'react'
import axios from 'axios';


function ForgetPassword() {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputValue);

        setEmail(inputValue);
        setIsValidEmail(isValid);
        setErrorMessage('');
    };

    const handleBlur = () => {
        if (email === '') {
            setErrorMessage('Please enter your email address.');
        } else if (!isValidEmail) {
            setErrorMessage('Please enter a valid email address.');
        } else {
            setErrorMessage('');
        }
    };

    const handleFocus = () => {
        setErrorMessage('');
    };

    const handleSend = () => {
        event.preventDefault();
        if (email === '') {
            setErrorMessage('Please enter your email address.');
        } else if (!isValidEmail) {
            setErrorMessage('Please enter a valid email address.');
        } else {
            axios.post('/', { email })
                .then(response => {
                    // console.log(email);
                    console.log(response.data);
                    // Add any necessary code to handle successful response
                })
                .catch(error => {
                    console.error(error);
                    // Add any necessary code to handle error response
                });
        }
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

            <div className='hidden sm:block bg-indigo-400 rounded-r-lg flex'>
                <img
                    src="./assets/images/Group.jpeg"
                    alt="Your Image"
                    width={500}
                    height={500}
                    style={{ display: 'block', margin: '0 auto' }}
                />
            </div>

            <div className='flex flex-col justify-center'>

                <form className='max-w-[500px] w-full mx-auto rounded-lg p-8 px-8 shadow-lg shadow-black-900/50'>

                    <div className="relative">

                        <h2 className='text-4xl dark:text-indigo-400 font-bold text-left pl-4'>
                            Forget Password
                        </h2>

                        <div className='dark:text-gray-400 text-left pl-4'>
                            Please enter your email address to receive a verification code.
                        </div>

                        <div className="absolute left-0 top-0 bottom-0 bg-indigo-400 w-1"></div>

                    </div>

                    <div className="flex flex-col text-gray-400 py-2 mt-5 my-20 relative">

                        <label>Email</label>

                        <div className="relative mt-2">

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                <svg className="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24">

                                    <path d="M22 5.88V18a2 2 0 01-2 2H4a2 2 0 01-2-2V5.88l8.45 5.13a1 1 0 001.1 0L22 5.88zM20 5l-8 4.85L4 5h16zM4 19v-8.13l8 4.86L20 10.87V19a2 2 0 01-2 2H6a2 2 0 01-2-2z" />

                                </svg>
                            </div>

                            <input
                                className="rounded-lg pl-10 pr-2 py-2 shadow-lg shadow-black-500/50 focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none w-full h-10 text-black"
                                type="email"
                                placeholder="youremail@xyz.com"
                                placeholder-class="placeholder-black"
                                value={email}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                            />
                        </div>

                    </div>

                    {errorMessage && (
                        <div className="text-red-500 font-bold mt-2">{errorMessage}</div>
                    )}

                    <button
                        className='w-full my-5 py-2 bg-indigo-400 shadow-lg shadow-indigo-400/50 hover:shadow-indigo-400/30 hover:bg-transparent text-white hover:text-black font-semibold rounded-lg border border-solid border-1 border-indigo-500'
                        onClick={handleSend}
                    >
                        Send
                    </button>

                    <button
                        className='w-full my-5 py-2 bg-indigo-400 shadow-lg shadow-indigo-400/50 hover:shadow-indigo-400/30 hover:bg-transparent text-white hover:text-black font-semibold rounded-lg border border-solid border-1 border-indigo-500'
                    >
                        Cancel
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;