import React from 'react';
import { BACKGROUND_URL } from '../utils/constant';

export default function Background (){
    return (
        <div className="absolute inset-0">
            <img className="w-full h-full object-cover" src={BACKGROUND_URL} alt="background of netflix-gpt" />
        </div>
    );
}

