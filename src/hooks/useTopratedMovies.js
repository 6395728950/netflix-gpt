import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utls/constant';
import { addTopratedMovies} from "../utls/MovieSlice";



const useTopratedMovies = () => {

    const dispatch = useDispatch();
    // const nowPlayingMovies=useSelector((store)=>store.movies?.nowPlayingMovies)
    const gettopratedMovies = async () => {
      const data = await fetch(
        
            'https://api.themoviedb.org/3/movie/top_rated?page=1',
        API_OPTIONS
      );
      const Json = await data.json();
       
      console.log(Json.results);
      
      dispatch(addTopratedMovies(Json.results));
    }
    useEffect(()=>{
       gettopratedMovies();
    },[]);
  return (
    <div>useTopratedMovies</div>
  )
}

export default useTopratedMovies