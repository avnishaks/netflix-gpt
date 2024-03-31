import React, { useRef, useState } from 'react';
import Header from './Header';
import Background from './Background';
import { checkValidData } from '../utils/validate';


export default function Login() {

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,seterrorMessage] = useState(false);
    const email =useRef(null);
    const password =useRef(null);
    const name =useRef(null);

    const handleButtonClick = () => {
        const message= checkValidData(name.current?name.current.value.trim():'',email.current.value, password.current.value);
        seterrorMessage(message)
        if(message.includes("Name")){
            name.current.value='';
            email.current.value = '';
            password.current.value = '';
        }
        else if (message.includes("Email")) {
            email.current.value = '';
            password.current.value = '';
        }
        else if (message.includes("Password")) {
            password.current.value = '';
        }
    }

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header/>
            <Background/>
            <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm &&  <input type="text" ref={name} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>}
                <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600"/>
                <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
                <p className='text-red-500 font-extrabold text-xl'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg font-extrabold' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
                <p> {isSignInForm?"New to Netflix ?":"Already registered ? "} <span className='font-bold underline cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"Sign up now":"Sing in now"}</span></p>
            </form>
        </div>
    );
}
