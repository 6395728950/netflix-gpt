import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utls/MovieSlice";
import { API_OPTIONS } from "../utls/constant";



const usePopularMoies = () => {
    const dispatch = useDispatch();
    // const nowPlayingMovies=useSelector((store)=>store.movies?.nowPlayingMovies)
    const getpopularMovies = async () => {
      const data = await fetch(
        
            'https://api.themoviedb.org/3/movie/popular?page=1',
        API_OPTIONS
      );
      const Json = await data.json();
       
      console.log(Json.results);
      
      dispatch(addPopularMovies(Json.results));
    }
    useEffect(()=>{
       getpopularMovies();
    },[]);
 
}

export default usePopularMoies;