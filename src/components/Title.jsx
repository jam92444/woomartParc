import React from 'react'

const Title = ({text1,text2,text3}) => {
  return (
    <div className='w-full mt-4 py-4 gap-3 text-center flex justify-center items-center flex-col'>
        <p className='text-md text-blue-600 xl:text-lg'>{text1}</p>
        <p className='text-2xl lg:text-4xl font-medium'>{text2}</p>
        <p className='text-gray-600 text-sm md:text-md w-3/4'>{text3}</p>
    </div>
  )
}

export default Title