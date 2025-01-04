import React from 'react'

const Footer = () => {
  return (
    <div className='w-full xl:h-[200px] bg-[#0039aaa1] p-4'>
      {/* Footer 4 Col */}
      <div className='flex flex-col md:flex-row md:items-center justify-evenly pt-6'>
      <div className='flex flex-col'>
        <span className='my-3 font-semibold  text-white'>COMPANY</span>
        <span className=' text-[#ffffffb4] text-[18px] 
        cursor-pointer hover:text-[#0039aaa1]'>About Us</span>
        <span className=' text-[#ffffffb4] text-[18px]
        cursor-pointer hover:text-[#0039aaa1]'>Term & Condition</span>
      </div>
      <div className='flex flex-col'>
        <span className='my-3 font-semibold  text-white'>GIFT CARDS</span>
        <span className=' text-[#ffffffb4] text-[18px]
         cursor-pointer hover:text-[#0039aaa1]'>Purchase Gif Card</span>
        <span className=' text-[#ffffffb4] text-[18px]
         cursor-pointer hover:text-[#0039aaa1]'>Gif Card FAQ</span>
      </div>
      <div className='flex flex-col'>
        <span className='my-3 font-semibold  text-white'>ADDRESS</span>
        <span className=' text-[#ffffffb4] text-[18px]
         cursor-pointer hover:text-[#0039aaa1]'>Address: Mohammadpur,Dhaka</span>
        <span className=' text-[#ffffffb4] text-[18px]
         cursor-pointer hover:text-[#0039aaa1]'>Phone-+8801302234567</span>
      </div>
      <div className='flex flex-col'>
        <span className='my-3 font-semibold  text-white'>FOLLOW US</span>
        <span className=' text-[#ffffffb4] text-[18px]
         cursor-pointer hover:text-[#0039aaa1]'>Linkedin</span>
        <span className=' text-[#ffffffb4] text-[18px]
         cursor-pointer hover:text-[#0039aaa1]'>Instagram</span>
      </div>
      </div>

       <p className='text-center text-white mt-7'>@Copyright All Right Reserved By Echo</p>
      
    </div>
  )
}

export default Footer
