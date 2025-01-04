import React from 'react'
import Hero_Img from '../../assets/img/hero-img.png'

const Hero = () => {
  return (
    <div className='flex items-center
     w-full h-full min-h-[465px] max-h-[800px] bg-[#26507F]'>
    {/* Hero 2 COl */}
    <div 
    className='container mx-auto
     flex flex-col 750px:flex-row items-center justify-evenly px-4 sm:px-0'>
        {/*Col 1*/}
        <div className='flex flex-col gap-5 md:gap-8'>
            <h1 
            className='md:w-[420px] w-full
             text-2xl md:text-4xl font-semibold text-white'>
                START YOUR JOURNEY WITH OUR ACCESSORIES</h1>
            {/* Col 1 Button */}
            <div>
                <button 
                className='text-1xl md:text-2xl text-[#26507F] font-semibold 
                w-[100px] md:w-[185px] h-[40px] md:h-[52px] rounded-md bg-white hover:bg-white/80'>
                    SHOP NOW</button>
            </div>
        </div>
        {/* Col 2 */}
        <div>
            <img src={Hero_Img} alt="Her-Img" className='w-[400px] md:w-[500px]' />
        </div>
    </div>
    </div>
  )
}

export default Hero
