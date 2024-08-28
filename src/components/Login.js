 import React, { useState } from 'react'
import Headr from './Headr'
 
 const Login = () => {
  const [issignform,setIssignform] = useState(true);
  const signupform = () => {
    setIssignform(!issignform);
  }
   return (
     <div className=''>
      <Headr></Headr>
      <div className='absolute h-screen '>
      <img src="../background.jpg" alt="background" className=""></img>
      </div>
      <form className='absolute bg-black p-12 w-3/12 mx-auto my-36 left-0 right-0 text-white bg-opacity-80 rounded-lg'>
      <h1 className='font-bold text-3xl py-4 '>{
        issignform ? "Sign In":"Sign Up"
 }</h1>
        {!issignform&&
          (<input type="text" placeholder='Enter your Name' className='p-4 my-4 w-full bg-gray-800 rounded-md'></input>


          )

        } 
        <input type="text" placeholder='Enter your email address' className='p-4 my-4 w-full bg-gray-800 rounded-md'></input>
        <input type="password " placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-md'></input>

        {!issignform&&
          (<input type="tel" placeholder='Phone Number' className='p-4 my-4 w-full bg-gray-800 rounded-md'></input>


          )

        }

        <button className='py-4 mx-auto my-6  bg-red-700 w-full font-bold rounded-lg'>{issignform ? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={signupform}>{issignform ? "New to Netflix ?Sign Up Now ":"Already User ?Sign In Now."} </p>
        </form>
     </div>
   )
 }
 
 export default Login