import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Head from "./Head";
import { Navigate } from "react-router-dom";

const Registor = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handlesignin = () => {
    setIsSignIn(!isSignIn);
  };
  const handleform = () => {
    console.log(email.current.value, password.current.value);
    const Msg = checkValidation(email.current.value, password.current.value);
    setErrorMsg(Msg);

    if (Msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signup success");
          setIsSignIn(!isSignIn);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Signup failed");
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("login success");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("login failed");
          console.log(errorCode+"-"+errorMessage);
        });
    }
  };
  return (
    <>
      <Head />
      <div className="flex items-center justify-center my-20">
        <div className="border border-gray-100 shadow-lg w-1/3 flex items-center justify-center">
        
          <form onSubmit={(e) => e.preventDefault()}>
              <h1 className="font-bold text-2xl pt-8 py-4 ">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (
              <input
                ref={name}
                className="px-5 py-3 my-4 border border-gray-300 rounded-md w-72" 
                type="text"
                placeholder="Full Name"
              />
            )}
            <br />
            <input
              ref={email}
              className="px-5 py-3 my-4 border border-gray-300 rounded-md  w-72"
              type="text"
              placeholder="Email"
            />
            <br />
            <input
              ref={password}
              className="px-5 py-3 my-4 border border-gray-300 rounded-md  w-72"
              type="password"
              placeholder="Password"
            />{" "}
            <br />
            {errorMsg && <p className="text-red-600 p-1">{errorMsg}</p>}
            <button
              className="px-5 py-2 border border-gray-200 rounded-lg bg-green-200 cursor-pointer"
              onClick={handleform}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>{" "}
            <br />
            <p className="cursor-pointer mt-8 mb-12" onClick={handlesignin}>
              {isSignIn ? "New to App? Sign up now." : "Already have an account? Sign in"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registor;
