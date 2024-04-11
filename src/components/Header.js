import React, { useEffect } from 'react';
import { LOGO } from '../utils/constant';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


export default function Header() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
   

    const user =useSelector(store => store.user)
    const handleSingOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
           
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName ,photoURL} = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              )
              navigate("/browse")
            } else {
              dispatch(removeUser())
              navigate("/")
            }
          });
          return () => unsubscribe();
    },[])

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

