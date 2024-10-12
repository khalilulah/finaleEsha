import React from 'react'
import moreProducts from './moreProducts'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import {useNavigate} from  'react-router-dom';

const ViewMore = () => {
     const history =useNavigate()
   const dispatch = useDispatch();
  const handleAddToCart =(product) =>{
    dispatch(addToCart(product))
    history.push('/cart')
  }
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {moreProducts.map((datum) => {
          return <div key={datum.id} className='flex flex-col '>
            <img src={datum.image} className='h-[300px] rounded-2xl' alt="" />
            <p className='text-customBlue text-[14px] mt-2' >{datum.name}</p>
            <p className='font-bold mb-2'>N{datum.price.toLocaleString()}</p>
            <button onClick={() => handleAddToCart(datum)} className=' bg-customBlue text-white p-2 rounded-lg'>Add to Cart</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default ViewMore
