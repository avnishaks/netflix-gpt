import React from 'react';
import { LOGO } from '../utils/constant';

export default function Header () {
    return (
        <div className="absolute w-screen px-0 py-0 bg-gradient-to-b from-black z-10">
           <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo of netflix-gpt" />
        </div>
    );
}

