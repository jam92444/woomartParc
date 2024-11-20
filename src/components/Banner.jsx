import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 mt-8 py-4 flex flex-col gap-4'>
        <div className="flex flex-col lg:flex-row w-[100%] items-center justify-between gap-4">
            <div className="w-full lg:w-[40%] mb-2 relative overflow-hidden rounded-md">
                <div className='w-full overflow-hidden rounded-md'>
                    <img className='w-full transition-all h-[250px] md:h-[350px] rounded-md hover:scale-110' src='https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/accessories-banner-1.jpg.webp' alt="" />
                </div>
                <div className='absolute top-0 left-0 flex flex-col items-start justify-center gap-2 md:gap-4 p-8'>
                    <p className=' font-normal text-sm md:text-lg text-blue-600'>Something completely new</p>
                    <p className='text-xl md:text-4xl font-medium '>Cases for Phone</p>
                    <button className='text-xs md:text-md uppercase font-bold text-white px-3 py-2 md:px-4 md:py-3 rounded-md bg-blue-600'>To Shop</button>
                </div>
            </div>
            <div className="w-full lg:w-[60%] mb-2  relative overflow-hidden rounded-md">
                <div className='w-full overflow-hidden rounded-md'>
                    <img className='w-full transition-all h-[250px] md:h-[350px] rounded-md hover:scale-110' src='https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-banner-2.jpg.webp' alt="" />
                </div>
                <div className='absolute top-0 left-0 flex flex-col items-start justify-center gap-2 md:gap-4 p-8'>
                    <p className=' font-normal text-sm md:text-lg text-blue-600'>Accessories for watch</p>
                    <p className='text-xl md:text-4xl font-medium '>Straps of any Color</p>
                    <button className='text-xs md:text-md uppercase border-2 transition-all border-gray-200 font-bold text-black px-3 py-2 md:px-4 md:py-3 rounded-md bg-transparent hover:border-gray-300'>To Shop</button>
                </div>
            </div>
           
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-4">
            <div className="w-full lg:w-[60%] mb-2   relative overflow-hidden rounded-md">
                <div className='w-full overflow-hidden rounded-md'>
                    <img className='w-full transition-all h-[250px] md:h-[350px] rounded-md hover:scale-110' src='https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-banner-3.jpg.webp' alt="" />
                </div>
                <div className='absolute top-0 left-0 flex flex-col items-start justify-center gap-2 md:gap-4 p-8'>
                    <p className=' font-normal text-sm md:text-lg text-blue-600'>Special offer</p>
                    <p className='text-xl md:text-4xl font-medium '>Buy One and Get 50% Off the Second </p>
                    <button className='text-xs md:text-md uppercase font-bold text-white px-3 py-2 md:px-4 md:py-3 rounded-md bg-blue-600'>Read More</button>
                </div>
            </div>
            <div className="w-full lg:w-[40%] mb-2  relative overflow-hidden rounded-md">
                <div className='w-full overflow-hidden rounded-md'>
                    <img className='w-full transition-all h-[250px] md:h-[350px] rounded-md hover:scale-110' src='https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/wood-accessories-category-4-opt.jpg.webp' alt="" />
                </div>
                <div className='absolute top-0 left-0 flex flex-col items-start justify-center gap-2 md:gap-4 p-8'>
                    <p className=' font-normal text-sm md:text-lg text-blue-600'>Try something completely</p>
                    <p className='text-xl md:text-4xl font-medium '>Charger Discount</p>
                    <button className='text-xs md:text-md uppercase font-bold text-white px-3 py-2 md:px-4 md:py-3 rounded-md bg-blue-600'>Buy Now</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Banner