import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const Maincontainer = () => {
    const movies = useSelector(store =>store.movies?.nowPlayingMovies);
    if(!movies){
       console.log("kuldeep parmar");
        return;
        
    }
    console.log("rahul parmar");
     

    const mainMovie = movies[0];
    console.log(mainMovie);
    const {original_title,overview,id}  = mainMovie;
  return (
    <div>
        <VideoTitle title ={original_title} overview = {overview}></VideoTitle>
        <VideoBackground movieId = {id}> </VideoBackground>
         
    </div>
  )
}

export default Maincontainer