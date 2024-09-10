import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div  className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
          <h1 className='mt-2 text-6xl font-bold'>{title}</h1>
        <p className='text-lg py-6 w-1/4 '>{overview}</p>
        <div>
            <button className='text-black bg-white p-3 px-15   text-xl rounded-lg hover:bg-opacity-80 hover:transition-all'> ▶ Play</button>
            <button className= 'text-black bg-white p-3 px-15    text-xl rounded-lg mx-2 hover:bg-opacity-80 '>More Info</button>
        </div>
    </div>
  )
};

export default VideoTitle