import React, { useRef, useState } from 'react';
import Header from './Header';
import Background from './Background';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { USER_AVATAR } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



export default function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(false);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    // const navigate=useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        const message = checkValidData(name.current ? name.current.value.trim() : '', email.current.value, password.current.value);
        seterrorMessage(message)
        if (message) {
            if (message.includes("Name")) {
                name.current.value = '';
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
        else {
            if (!isSignInForm) {
                // sign up form logic
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: name.current.value, photoURL: USER_AVATAR
                        }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: USER_AVATAR
                                })
                            )
                            // navigate("/browse")
                        }).catch((error) => {
                            seterrorMessage(error.message)
                        });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        seterrorMessage(errorCode + " -  " + errorMessage)
                    });
            }
            else {
                // sing in form logic
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;

                        // navigate("/browse")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        seterrorMessage(errorCode + " -  " + errorMessage)
                    });
            }
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
        <Header />
        <Background/>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
  
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    );
}
