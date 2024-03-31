import React from 'react';
import Header from './Header';
import Background from './Background';


export default function Login() {
    return (
        <div>
            <Header/>
            <Background/>
            <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
                <h1 className='font-bold text-3xl py-4'>Sing In</h1>
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg font-extrabold'>Sing In</button>
            </form>
        </div>
    );
}
