import React, { useState } from 'react'
import data from './data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import {useNavigate} from  'react-router-dom';
import ViewMore from './ViewMore';


const Products = () => {

  const [viewMore, setViewMore] = useState(false)

  const history =useNavigate()
   const dispatch = useDispatch();
  const handleAddToCart =(product) =>{
    dispatch(addToCart(product))
    history.push('/cart')
  }
 

  return (
    <div id="products"  className=' max-w-[1340px] flex flex-col m-auto sm:mt-[5px] font-lato mb-[50px] pr-[30px] pl-[30px]'>
      <div className="paragraph-div">
        <p className='text-customBlue'>Explore our Product</p>
        <p className='w-[100%] smd:w-[700px] font-bold text-[27px] leading-8 mb-7 mt-3'>Dive into a world of exceptional style. Explore our
             curated collection of product category and discover
              pieces that resonate with your unique taste.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {data.map((datum) => {
          return <div key={datum.id} className='flex flex-col '>
            <img src={datum.image} alt="" />
            <p className='text-customBlue text-[14px] mt-2' >{datum.name}</p>
            <p className='font-bold mb-2'>N{datum.price.toLocaleString()}</p>
            <button onClick={() => handleAddToCart(datum)} className=' bg-customBlue text-white p-2 rounded-lg'>Add to Cart</button>
          </div>
        })}
      </div>
      {viewMore? <ViewMore/> :''}
      <button className='text-customBlue hover:bg-customBlue w-[150px] mt-5 p-2 m-auto hover:text-white rounded-xl' onClick={() => setViewMore(!viewMore)}>{viewMore? 'Show less' :'View all Products'}</button>
    </div>
  )
}

export default Products
