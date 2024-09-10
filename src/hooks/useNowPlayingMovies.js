import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utls/constant';
import { addNowPlayingMovies } from '../utls/MovieSlice';


export const useNowPlayingMovies = () => {
    // fetch data from tmdb api and update the store
    const dispatch = useDispatch();
    // const nowPlayingMovies=useSelector((store)=>store.movies?.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        API_OPTIONS
      );
      const Json = await data.json();
       
      console.log(Json.results);
      
      dispatch(addNowPlayingMovies(Json.results));
    }
    useEffect(()=>{
       getNowPlayingMovies();
    },[]);
   
}
