import React from 'react'
import Epitome from '../assets/Frame5.png'
import MaterialImg1 from'../assets/Group1.png'
import MaterialImg2 from'../assets/Frame11.png'
import vector1 from'../assets/Vector1.png'
import vector2 from'../assets/Vector2.png'
import Curve from '../assets/3d-glassy-curved-line2.png'
import ArrowUp from '../assets/Arrowup-right.png'


const HeroPage = () => {
  return (
    <div className='  sm:w-[100%]
    sm:mb-[0px]
     max-w-[1340px] 
    xl:w-[100vw]  relative font-lato h-[550px] sm:h-[550px] flex  justify-center mt-[0px] m-auto text-center overflow-hidden ' >
      <img src={vector2} alt="material" className=' w-0
        smd:w-[230px]
        absolute
        top-[-50px]
        right-[-50px]
       ' />
        <div className="text-div h-[250px] sm:h-[350px] relative leading-none mt-[85px] ">
        <img src={MaterialImg1} alt="material" className='
        w-[250px]
        absolute
        top-0
        z-10
        left-[-190px]
       ' />
        

       <img src={Curve} alt="material" className='
       w-[100px]
       top-[60px]
       sm:w-[130px]
        lg:w-[160px]
        absolute
        sm:top-[110px]
        left-[-20px]
        z-30

       ' />
        <p className='text-[40px] font-bold
        sm:text-[55px]
        lg:text-[70px]
        '>
            Discover the
        </p>
        <div className="comfort-div flex">
            <img src={Epitome} alt="epitom" className='w-[150px] sm:w-[210px] z-20 lg:w-[260px]' />
            <p className='text-[40px] font-bold
        sm:text-[55px]
        lg:text-[70px]
        '>of comfort</p>
        </div>
        <p className='text-[40px] font-bold
        mt-[-20px]
        sm:text-[55px]
        lg:text-[70px]
        '>and class</p>
        
      <img src={MaterialImg2} alt="material" className='
         w-[250px]
        absolute
        bottom-[-60px]
        right-[-170px]
        sm:bottom-[0px]
        lg:bottom-[-20px]
       ' />
       <div className="orderNow-btn absolute flex justify-around bottom-0 w-[130px] left-1/2 items-center ml-[-50px]">
      <a href="#products" className='text-customBlue cursor-pointer'>Order Now</a>
        <img src={ArrowUp} alt="arrow up" className='bg-customBlue rounded-2xl w-5' />
        
       </div>
        </div>
        <img src={vector1} alt="material" className=' w-0
         smd:w-[250px]
        absolute
        bottom-[-60px]
        left-[0px]
        sm:bottom-[-20px]
        lg:bottom-[-60px]
       ' />
    </div>
  )
}

export default HeroPage
