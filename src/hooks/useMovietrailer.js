import React, { useEffect } from 'react'
import { addTrailer } from '../utls/MovieSlice';
import { API_OPTIONS } from '../utls/constant'
import { useDispatch } from 'react-redux';
 

const useMovietrailer = (movieId) => {
    const dispatch  = useDispatch(); 
    const getvideos  = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +  '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        const filterdata= json.results.filter(video => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailer(trailer));
    };
    useEffect(() =>{
        getvideos();
       },[])
  return (

    <div>useMovietrailer</div>
  )
}

export default useMovietrailer;