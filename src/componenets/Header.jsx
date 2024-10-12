import React from 'react'
import eEsha from '../assets/eEsha.png'
import Cart from '../assets/Shoppingcart.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Header = () => {

  const{cartQuantity} = useSelector((state) => state.cart)
  return (
    <div className='z-10 bg-white pt-3 p-5 w-whole h-[60px] sticky top-0 font-lato shadow-bottom flex justify-between m-auto max-w-[1340px]'>
      <img src={eEsha} alt="logo"
      className='w-logoWeidth h-logoHeight mt-2 '
       />
       <Link to="/shop">
       <button className="shop-div
        pl-2 pr-2 pt-[3px]
                 flex justify-around
          w-shopBtnWidth h-shopBtnheight
           border-2 rounded-2xl border-customYellow
           text-[13px] "
          
       >
        Shop Now
        <div className='relative'>
      <img src={Cart} alt="logo"
      className='w-[20px] h-[20px] '
       />
       <p className='absolute top-[-3px] right-[-6px] bg-customYellow text-white w-[17px] h-5 rounded-xl ' >{cartQuantity}</p>
        </div>
       </button>
       </Link>
    </div>
  )
}

export default Header
