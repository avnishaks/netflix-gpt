import React from 'react';
import { LOGO, USER_AVATAR } from '../utils/constant';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
    const navigate=useNavigate();
    const user =useSelector(store => store.user)
    const handleSingOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    return (
        <div className="absolute w-screen px-0 py-0 bg-gradient-to-b from-black z-10 flex justify-between p-2">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo of netflix-gpt" />
            {user && <div className='flex'>
                <img className="w-12 h-12 p-2" src={user.photoURL} alt="user_icon" />
                <button onClick={handleSingOut} className='font-bold text-white'>Sing Out</button>
            </div> }
        </div>
    );
}

