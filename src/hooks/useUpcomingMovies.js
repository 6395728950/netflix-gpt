import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utls/constant';
import { addUpcomingMovies } from "../utls/MovieSlice";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    // const nowPlayingMovies=useSelector((store)=>store.movies?.nowPlayingMovies)
    const getupcomingMovies = async () => {
      const data = await fetch(
        
            
          'https://api.themoviedb.org/3/movie/upcoming?page=1',
        API_OPTIONS
      );
      const Json = await data.json();
       
      console.log(Json.results);
      
      dispatch(addUpcomingMovies(Json.results));
    }
    useEffect(()=>{
       getupcomingMovies();
    },[]);
  return (
    <div>useUpcomingMovies</div>
  )
};

export default useUpcomingMovies;