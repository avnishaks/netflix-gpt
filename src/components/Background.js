import React from 'react';
import { BACKGROUND_URL } from '../utils/constant';

export default function Background (){
    return (
        <div className="absolute">
            <img className="h-screen object-cover" src={BACKGROUND_URL} alt="background of netflix-gpt" />
        </div>
    );
}

