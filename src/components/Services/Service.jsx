import React from 'react'
import Service_1 from '../../assets/img/Shipping.png'
import Service_2 from '../../assets/img/payment.png'
import Service_3 from '../../assets/img/support.png'

const Service = () => {
  return (
    <>
    {/* Service 3 col*/}
    <div className='my-10 py-5 flex items-center justify-center gap-5 flex-wrap px-4 sm:px-0'>
        <div 
        className='text-center w-full max-w-[430px] min-w-[200px] h-[230px]
         flex flex-col items-center gap-4 border border-[#26507F] p-4'>
            <img src={Service_1} width={50}/>
            <h2 className='text-2xl text-[#26507F] font-medium'>FREE SHIPPING</h2>
            <p className='text-[15px] text-[#26507F]'>We're delighted to offer you the added 
                convenience of Free Shipping 
                on all your purchases.</p>
        </div>
        <div 
        className='text-center w-full max-w-[430px] min-w-[200px] h-[230px]
         flex flex-col items-center gap-4 border border-[#26507F] p-4'>
            <img src={Service_2} width={50}/>
            <h2 className='text-2xl text-[#26507F] font-medium'>SAFE PAYMENT</h2>
            <p className='text-[15px] text-[#26507F]'>Your security and peace of mind are our 
                top priorities. That's why we offer a 
                range of safe and secure option.</p>
        </div>
        <div 
        className='text-center w-full max-w-[430px] min-w-[200px] h-[230px]
         flex flex-col items-center gap-4 border border-[#26507F] p-4'>
            <img src={Service_3} width={50}/>
            <h2 className='text-2xl text-[#26507F] font-medium'>SUPPORT</h2>
            <p className='text-[15px] text-[#26507F]'>Customer satisfaction is at the core of our
                values. We understand that exceptional 
                support is paramount to a positive </p>
        </div>
    </div>
    </>
  )
}

export default Service
