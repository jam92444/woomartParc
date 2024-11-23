import React from 'react'
import assets from '../assets/constants'

const Photo = () => {
    
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center w-full mt-8'>
        {
            assets.photos.map((item,index)=>(

                <img key={index} className='' src={item} alt="" />
            ))
        }
    </div>
  )
}

export default Photo
