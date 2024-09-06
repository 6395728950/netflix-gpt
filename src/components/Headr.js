import React from 'react';

  import { useNavigate } from 'react-router-dom';
  import { signOut } from "firebase/auth";
  import {auth} from "../utls/firebase";
import { useSelector } from 'react-redux';

const Headr = () => {
  const user = useSelector( store =>store.user);
  const navigate =useNavigate();
  const handlesignout = () =>{
    signOut(auth).then(() => {
       navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
   
       <div className='absolute w-screen px-8 py-2 bg-gradient-to-b-from bg-black z-10  flex justify-between'>
    <img src="../Netflixlogo.jpeg" alt="logo" className='w-44 '/>
    
    
    { user && (<div className='flex p-2'>
        <img alt= "usericon" src= {user?.photoURL} className='w-12 h-12'></img>
      <button className='text-white font-bold' onClick={handlesignout}>Sign Out</button>
    </div>)
} 
    
    
    </div>
    
  )
}
  
export default Headr