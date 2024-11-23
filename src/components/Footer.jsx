import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#101010] text-gray-100 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center p-8'>
      <img className='w-52 opacity-65' src='https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/wood-logo-white-reserve.svg' alt="" />
      <div>
        <ul className='flex flex-wrap text-center cursor-pointer items-center justify-around gap-5 font-semibold text-xs '>
          <li><a href="/">ABOUT US</a></li>
          <li><a href="/">PRIVACY POLICY</a></li>
          <li><a href="/">SHIPPING</a></li>
          <li><a href="/">TRACK ORDER</a></li>
          <li><a href="/">FAQs</a></li>
        </ul>
      </div>
      <p className='text-gray-400 text-xs '>Xtemos Studio Copyright © 2024</p>
    </div>
  )
}

export default Footer