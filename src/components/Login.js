 import React, { useRef, useState } from 'react';
import Headr from './Headr';
import { Valid} from '../utls/Valid';
import {auth} from "../utls/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
 import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utls/userSlice';
 
 const Login = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [issignform,setIssignform] = useState(true);
  const signupform = () => {
    setIssignform(!issignform);
  }
  const email = useRef(null);
  const password= useRef(null);
  const name = useRef(null);
  const [errormessage,setErrormessage] = useState(null);

  const handlebuttonclick =()=>{
    
      const message = issignform?  Valid(email.current.value,password.current.value):Valid(email.current.value,password.current.value,name.current.value);
    
   
     setErrormessage(message);
     if(message)return;
     //sign in sign up logic
     if(!issignform){
      // sign up logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value,name.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
        }).then(() => {
          const {uid,email,displayname,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL}));
          navigate("/browse");
      
        }).catch((error) => {
           setErrormessage(error.message);
        });
        
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode + "-" + errorMessage);
        // ..
      });
        
     }
     else{
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/Browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode + "-" + errorMessage);
  });
     }

  }; 
   return (
     <div className=''>
      <Headr></Headr>
      <div className='absolute h-screen '>
      <img src="../background.jpg" alt="background" className=""></img>
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}}
        className='absolute bg-black p-12 w-3/12 mx-auto my-36 left-0 right-0 text-white bg-opacity-80 rounded-lg'>
      <h1 className='font-bold text-3xl py-4 '>{
        issignform ? "Sign In":"Sign Up"
 }</h1>
        {!issignform&&
        ( 
        
          <input type="text" placeholder='Enter your Name' className='p-4 my-4 w-full bg-gray-800 rounded-md' ref={name}></input>


          )

        } 
        <input type="text" placeholder='Enter your email address' className='p-4 my-4 w-full bg-gray-800 rounded-md' ref={email}></input>
        <input type="password " placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-md' ref={password}></input>

        {!issignform&&
          (<input type="tel" placeholder='Phone Number' className='p-4 my-4 w-full bg-gray-800 rounded-md'></input>


          )

        }
        <p className='text-red-600 font-bold text-lg'>{errormessage}</p>

        <button className='py-4 mx-auto my-6  bg-red-700 w-full font-bold rounded-lg' onClick ={handlebuttonclick}>{issignform ? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={signupform}>{issignform ? "New to Netflix ?Sign Up Now ":"Already User ?Sign In Now."} </p>
        </form>
     </div>
   )
 }
 
 export default Login