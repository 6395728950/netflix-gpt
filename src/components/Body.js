import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utls/firebase";
import { useDispatch } from 'react-redux';
import { removeUser ,addUser} from '../utls/userSlice';

const Body = () => {
  const dispatch = useDispatch();
 
   const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },{
      path:"/Browse",
      element:<Browse/>
    },
   ])
   useEffect( () =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        
        const {uid,email,displayname,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL}));
        
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
         
      }
    });
   },[]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body