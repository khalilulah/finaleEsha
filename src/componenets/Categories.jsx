import React from 'react'
import ArrowUp from '../assets/Arrowup-right.png'
import CatCloth1 from '../assets/Frame10.png'
import BlackArrowUp from '../assets/Frame8.png'
import CatCloth2 from '../assets/Frame10(1).png'
import CatCloth3 from '../assets/Frame10(2).png'
import Essentials from '../assets/PurewhiteEssentials1.png'


const Categories = () => {
  return (
    <div className='  max-w-[1340px] m-auto mt-[-130px] sm:mt-[5px] mb-[50px] p-[30px] bg-customDeepBlack rounded-3xl text-white font-lato overflow-hidden'>
        <div className='h-[100%] relative'>
      <div className="head flex justify-between mb-[20px]">
        <p>Browse by Category</p>
        
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {/* First container */}
      <div className="bg-customBlack p-4 text-white rounded-tl-xl h-auto rounded-tr-xl ">
        <div className="tittle flex justify-between">
        <p className='text-customYellow font-bold'>Business Casual</p>
        <a href="#products"><img src={ArrowUp} alt="" className='bg-customLightBlack rounded-3xl p-1' /></a>
        </div>
        <div className="img-div mt-[30px]">
            <img src={CatCloth1} alt=""  />
        </div>
      </div>
      
      {/* Second container */}
      <div className="bg-customLightBlue font-bold h-[250px] row-span-1 p-4 sm:row-span-2 sm:h-auto rounded-tl-xl rounded-tr-xl">
        <div className="tittle flex justify-between">
        <p className='w-[100px]'>Her Wardrope</p>
        <a href="#products">
        <img src={BlackArrowUp} alt="" className='w-[40px] h-[40px] text-customLightBlack rounded-3xl p-1' />
        </a>
        </div>
        <picture className="img-div mt-[30px]  rounded-none">
           {/* <source media="(max-width: 640px)" srcSet={Essentials2} /> */}
            <img src={CatCloth3} alt="" className=' h-[150px] rounded-none m-[10px] w-[97%] sm:h-auto' />
        </picture>
      </div>
      
      {/* Third container - spans two rows */}
      <div className="bg-customBlack p-4 text-white rounded-tl-xl rounded-tr-xl">
        <div className="tittle flex justify-between">
        <p className='text-customYellow font-bold'>Vintage</p>
        <a href="#products">
        <img src={ArrowUp} alt="" className='bg-customLightBlack rounded-3xl p-1' />
        </a>
        </div>
        <div className="img-div mt-[30px]">
            <img src={CatCloth2} alt="" />
        </div>
      </div>
    </div>
    <div className="final-text w-[100%] sm:w-[650px] mt-[70px] mb-[50px]">
        <h1 className='uppercase text-customYellow text-[30px] sm:text-[47px]'>Timeless elegance. Crafted <span className='text-white'>for you. Connect with us on social media</span>for style inspiration.</h1>
    </div>
    <img src={Essentials} alt="" className='w-[1px] md:w-[600px] absolute bottom-[-250px] right-[-50px]'/>
        </div>
        
    </div>
  )
}

export default Categories
