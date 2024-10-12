import React from 'react'
import eEsha from '../assets/eEsha(1).png'
import IgFrame from '../assets/Frame427320661.png'

const Footer = () => {
  return (
    <div className='  max-w-[1340px] m-auto  sm:mt-[5px] p-[30px] bg-customDeepBlack rounded-3xl text-white font-lato overflow-hidden'>
      <div>
        <div className="items-start text-left footer-heading flex flex-col sm:items-center md:text-center pl-1 pr-1 pt-10 pb-10 border-b-2 border-gray-600">
            <h1 className='uppercase text-white text-[30px] sm:text-[45px]'>Discover luxury redefined. Explore our world of<span className='text-customYellow'> exquisite apparel </span>and elevate your style.</h1>
            <p className='mt-3 '>Join our community for exclusive offers and style inspiration.</p>
        </div>
        <div>
            <div className='mt-3'>
                <img src={eEsha} alt="logo"  className='w-logoWeidth h-logoHeight mb-2 mt-2' />
                <p>+234 567 8900</p>
                <p className='mb-2'>info@eeshaapparel.com</p>
                <img src={IgFrame} alt="" className='hover:cursor-pointer' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
