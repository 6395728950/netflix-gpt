import React from 'react'
import { IMG_URL } from '../utls/constant'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-[185px] pr-4'>
        <img alt = "Movies card" src = {IMG_URL+posterpath}></img>
    </div>
  )
}

export default MovieCard