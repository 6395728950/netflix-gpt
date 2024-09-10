import React, { useEffect } from 'react';

  import { useNavigate } from 'react-router-dom';
  import { onAuthStateChanged, signOut } from "firebase/auth";
  import {auth} from "../utls/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utls/userSlice';
import { Logo } from '../utls/constant';

const Headr = () => {
  const dispatch = useDispatch();
  const user = useSelector( store =>store.user);
  const navigate =useNavigate();
  const handlesignout = () =>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
     
    });
  };
  useEffect( () =>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        
        const {uid,email,displayname,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL}));
        
        // ...
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
         
      }
    });
    // unsubscribe when component is unmount
    return ()=> unsubscribe();
   },[]);

  return (
   
       <div className='absolute w-screen px-8 py-2 bg-gradient-to-b-from bg-black z-10  flex justify-between'>
    <img src= {Logo} alt="logo" className='w-44 '/>
    
    
    { user && (<div className='flex p-2'>
        <img alt= "usericon" src= {user?.photoURL} className='w-12 h-12'></img>
      <button className='text-white font-bold' onClick={handlesignout}>Sign Out</button>
    </div>)
} 
    
    
    </div>
    
  )
}
  
export default Headr