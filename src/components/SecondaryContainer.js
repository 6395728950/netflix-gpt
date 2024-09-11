import React from 'react';
import MovieList from "./MovieList";
import {useSelector} from 'react-redux';
const SecondaryContainer = () => {
  const movies  = useSelector((store) =>store.movies);
  return (
      (
        <div className="bg-black bg-opacity-70 w-screen pl-12">
          <div className='-mt-52 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Top Rated"} movies={movies.topratedmovies}></MovieList>
      <MovieList title={"Popular Movies"} movies={movies.popularmovies}></MovieList>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingmovies}></MovieList>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}></MovieList>
          </div>
   
      
    </div>
     )
     
     
  );
}

export default SecondaryContainer