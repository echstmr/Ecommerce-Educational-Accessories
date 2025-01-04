import React, { useState } from 'react'
import Product_01 from '../../assets/img/product-01.png'
import data from '../../assets/data/data.json'

const Product = () => {
    const [products] = useState(data)
  return (
    <div>
        {/* Products Section*/}
        <div className='container mx-auto py-10'>
            {/* Title */}
            <div className='flex items-center justify-between px-4 sm:px-0 my-10'>
                <h2 className='font-semibold text-[18px]'>POPULAR PRODUCT</h2>
                <h2 className='font-semibold hover:text-[#003AAA] cursor-pointer'>View all</h2>
            </div>
            {/* Products List */}
            <div className='flex items-center justify-center flex-wrap gap-3'>
                {
                    products.map((product, index) =>(
                    <div className='border w-[300px] h-[406px] flex gap-10 flex-col items-center text-center rounded-md'>
                        <div className='w-[300px] h-[230px] flex justify-center bg-[#0039aa23]'>
                            <img src={product.img} className='w-[200px] hover:scale-105 duration-300'/>
                        </div>
                        {/* Product Details */}
                        <div>
                        <p className='font-semibold'>{product.name}</p>
                        <p className='font-semibold'>P{product.price}</p>
                        <button className='w-[150px] bg-[#003AAA] hover:bg-[#0039aab0] text-white p-2 my-4 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                    ))
                }
            

            </div>
        </div>
      
    </div>
  )
}

export default Product
