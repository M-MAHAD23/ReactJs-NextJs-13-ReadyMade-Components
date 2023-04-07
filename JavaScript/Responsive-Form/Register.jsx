import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';


function Register() {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [username, setUsername] = useState('');
    const [isUsername, setIsValidUsername] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (event) => {
        event.preventDefault(); // prevent the default behavior of the button
        setShowPassword(!showPassword); // toggle the showPassword state
    };

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputValue);

        setEmail(inputValue);
        setIsValidEmail(isValid);
        setErrorMessage('');
    };

    const handlePasswordChange = (e) => {
        const inputValue = e.target.value;
        const isValid = inputValue.length >= 6;

        setPassword(inputValue);
        setIsValidPassword(isValid);
        setErrorMessage('');
    };
    
    const handleUsernameChange = (e) => {
        const inputValue = e.target.value;
        const isValid = inputValue.length >= 4; // adjust validation criteria as needed
      
        setUsername(inputValue);
        setIsValidUsername(isValid);
        setErrorMessage('');
      };
      

    const handleBlurEmail = () => {
        if (email === '') {
            setErrorMessage('Please enter your email address.');
        } else if (!isValidEmail) {
            setErrorMessage('Please enter a valid email address.');
        } else {
            setErrorMessage('');
        }
    };

    const handleBlurPassword = () => {
        if (email === '') {
            setErrorMessage('Please enter your Password.');
        } else {
            setErrorMessage('');
        }
    };

    const handleBlurUsername = () => {
        if (username === '') {
          setErrorMessage('Please enter your username.');
        } else {
          setErrorMessage('');
        }
      };      

    const handleFocus = () => {
        setErrorMessage('');
    };

    const handleSend = () => {
        event.preventDefault();
        if (email === '' || password === '') {
            setErrorMessage('Please enter your username, email, and password.');
        } else {
            axios.post('/api/login', { email, password })
                .then(response => {
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
        <>
            <div className='flex flex-col justify-center items-center h-screen'>

                <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 border border-solid border-1 border-indigo-500 relative'>

                    <div className="relative">

                        <h2 className='text-4xl dark:text-indigo-400 font-bold text-left pl-4'>
                            Register
                        </h2>

                        {/* <div className='dark:text-gray-400 text-left pl-4'>
                            Please enter your email and password.
                        </div> */}

                        <div className="absolute left-0 top-0 bottom-0 bg-indigo-400 w-1"></div>

                    </div>

                    <div className="flex flex-col text-gray-400 py-2 mt-0 relative">

                        <div className='mt-5'>
                            <label>Username</label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span>名</span>
                                </div>
                                <input
                                    className="rounded-lg pl-10 pr-2 py-2 focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none w-full h-10 text-black border border-solid border-1 border-indigo-500"
                                    type="text"
                                    placeholder="Your Name"
                                    placeholder-class="placeholder-black"
                                    onChange={handleUsernameChange}
                                    onBlur={handleBlurUsername}
                                    onFocus={handleFocus}
                                />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label>Email</label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24">
                                        <path d="M22 5.88V18a2 2 0 01-2 2H4a2 2 0 01-2-2V5.88l8.45 5.13a1 1 0 001.1 0L22 5.88zM20 5l-8 4.85L4 5h16zM4 19v-8.13l8 4.86L20 10.87V19a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <input
                                    className="rounded-lg pl-10 pr-2 py-2 focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none w-full h-10 text-black border border-solid border-1 border-indigo-500"
                                    type="email"
                                    placeholder="youremail@xyz.com"
                                    placeholder-class="placeholder-black"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={handleBlurEmail}
                                    onFocus={handleFocus}
                                />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label>Password</label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span>🗝️</span>
                                </div>
                                <input
                                    className="rounded-lg pl-10 pr-2 py-2 focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none w-full h-10 text-black border border-solid border-1 border-indigo-500"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    placeholder-class="placeholder-black"
                                    onChange={handlePasswordChange}
                                    onBlur={handleBlurPassword}
                                    onFocus={handleFocus}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <button
                                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {errorMessage && (
                        <div className="text-red-500 font-bold mt-2">{errorMessage}</div>
                    )}

                    <div className="relative mt-5">
                        <button
                            className='w-full my-5 py-2 bg-indigo-400 hover:shadow-indigo-400/30 hover:bg-transparent text-white hover:text-black font-semibold rounded-lg border border-solid border-1 border-indigo-500'
                            onClick={handleSend}
                        >
                            Create Account
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;