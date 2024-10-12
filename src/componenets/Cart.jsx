import React from 'react'

import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { AddIcons,MinusIcons,BackIcon } from './icon';
import { removeFromCart,decreaseItem,increaseItem, clearCart, getTotal } from '../features/cartSlice';
import { Link } from 'react-router-dom';


let omo =0;
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart.cartItems.length);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal())
    },[cart, dispatch])

    const handleRemoveFromCart = (cartItem)=>{
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseItem = (cartItem) => {
        dispatch(decreaseItem(cartItem))
    }
    const handleIncreaseItem = (cartItem) => {
        dispatch(increaseItem(cartItem))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
    return (
        <div className=' max-w-[1340px] w-whole flex flex-col m-auto font-lato mb-5'>
            <button className='border p-2 m-2 w-[130px] bg-customYellow text-white rounded-lg '><Link to="/" className='flex items-center justify-between'><BackIcon/>Back to shop</Link></button>
            {cart.cartItems.length === 0 ? (
                <div className='h-[80vh] flex justify-center items-center'><h1 className='text-[20px] sm:text-[50px]'>Your cart is empty</h1></div>
            ) : (
                <div className='flex flex-col'>
                    <div  className='font-lato h-0 flex flex-col w-[90%] p-4 m-auto '>
                                <div className='flex justify-between items-center'>
                                <p className='w-[100px] mb-1'>Product</p>
                                <p className=' w-[100px] smd:w-[200px]'>
                                  Info
                                </p>
                                <p className=' ml-[-15px] flex justify-around items-center'>Quantity</p>
                                </div>
                            
                                
                            </div>
                        {cart.cartItems?.map(cartItem => (
                            
                            <div key={cartItem.id} className='h-[133px] font-lato border mt-5 flex flex-col w-[90%] p-4 m-auto '>
                                <div className='flex justify-between'>
                                <img src={cartItem.image} alt="" className='w-[100px] h-[80px] rounded-xl mb-1'/>
                                <div className=' w-[100px] smd:w-[200px]'>
                                    <p>{cartItem.name}</p>
                                    <p className='text-gray-500'>N{cartItem.price.toLocaleString()}</p>
                                    <button onClick={() => handleRemoveFromCart(cartItem)} className='text-gray-500'>remove item</button>
                                </div>
                                <p className='border w-[80px] h-[30px] mt-[20px] ml-[-15px] flex justify-around items-center'><button  onClick={() => handleIncreaseItem(cartItem)}><AddIcons /></button>{cartItem.cartQuantity}<button onClick={() => handleDecreaseItem(cartItem)}><MinusIcons/></button></p>
                                </div>
                                <p className='hidden'>
                                {omo = cartItem.cartQuantity * cartItem.price}
                                </p>
                                <div className='flex justify-between'>
                                    <p className='text-gray-500'>Total</p>
                                    <p>N{omo.toLocaleString()}</p>
                                </div>
                                
                            </div>
                        ))}
                    
                    <div className=' font-lato mt-5 flex flex-col w-[90%] p-4 m-auto '>
                                        <div className='flex justify-between'>
                                            <p className='text-gray-500 font-extrabold'>Total</p>
                                            <p className='font-extrabold'>N{(cart.amount).toLocaleString()}</p>
                                        </div>
                                    </div>
                    <button className='m-auto bg-customYellow p-[5px] rounded-sm text-white' onClick={() => handleClearCart()}>Clear Cart</button>
                </div>
            )}
                </div>
            )
}

export default Cart
