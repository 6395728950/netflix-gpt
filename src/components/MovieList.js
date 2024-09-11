import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
 console.log(movies);
  return (
    <div className=' px-6'>
         <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            
            {
              movies?.map(movie=>  <div className='flex'><MovieCard key={movie.id} posterpath={movie.poster_path}></MovieCard>  </div>)
            }
           
        </div>
         
    </div>
  )
}

export default MovieList
