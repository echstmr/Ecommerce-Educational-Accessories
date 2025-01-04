import React from 'react'
import Categ_1 from '../../assets/img/category1.png'
import Categ_2 from '../../assets/img/category2.png'
import Categ_3 from '../../assets/img/category3.png'
import Categ_4 from '../../assets/img/category4.png'
import Categ_5 from '../../assets/img/category5.png'

const Category = () => {
  return (
    <div className='bg-[#0039aa3b] my-10'>
       <div className='container mx-auto flex flex-col items-center py-10'>
        {/* Title */}
        <div className='w-full flex items-center justify-between px-4'>
            <h2 className='font-semibold text-[18px]'>CATEGORY</h2>
            <h2 className='font-semibold cursor-pointer 
            hover:text-[#26507F]'>View all</h2>
        </div>
        {/* Category Card */}
        <div className='flex items-center justify-center flex-wrap gap-10 pt-10'>
            <div className='flex items-center justify-center rounded-md  
                flex-col gap-3 w-[200px] h-[200px] border border-[#26507F]'>
                <img src={Categ_1} width={120}/>
                <p className='font-semibold'>Pen & Pencil</p>
            </div>
            <div className='flex items-center justify-center rounded-md 
                flex-col gap-3 w-[200px] h-[200px] border border-[#26507F]'>
                <img src={Categ_2} width={120}/>
                <p className='font-semibold'>Paper & Notebook</p>
            </div>
            <div className='flex items-center justify-center rounded-md 
                flex-col gap-3 w-[200px] h-[200px] border border-[#26507F]'>
                <img src={Categ_3} width={120}/>
                <p className='font-semibold'>PC Accessories</p>
            </div>
            <div className='flex items-center justify-center rounded-md 
                flex-col gap-3 w-[200px] h-[200px] border border-[#26507F]'>
                <img src={Categ_4} width={120}/>
                <p className='font-semibold'>File & Folder</p>
            </div>
            <div className='flex items-center justify-center rounded-md 
                flex-col gap-3 w-[200px] h-[200px] border border-[#26507F]'>
                <img src={Categ_5} width={120}/>
                <p className='font-semibold'>Desk Accessories</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Category
