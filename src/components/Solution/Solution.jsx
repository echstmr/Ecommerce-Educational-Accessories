import React from 'react'

const Solution = () => {
  return (
    <div className='my-10'>
        {/* Title */}
        <h1 className='text-center text-2xl font-semibold'>INNOVATIVE SOLUTIONS, EXCEPTIONAL RESULTS</h1>
        {/* Solution Cards 3 col*/}
        <div className='flex items-center justify-center flex-wrap gap-4 my-10'>
            <div className='w-[400px] h-[250px] text-center justify-center bg-[#003AAA] rounded-md
                    flex flex-col gap-4 items-center border border-[#003AAA] p-4'>
                <h1 className='text-white font-semibold'>SCHOOL SOLUTION</h1>
                <p className='text-[#ffffff93]'>We understand the unique challenges faced by edu
                    cational institutions, and we're here to provide holi
                    stic School Solutions that empower schools.</p>
                <button className='w-[150px] bg-[#ffffff] hover:bg-[#ffffffbe] text-[#003AAA] p-2 my-4 rounded-md'>Add to Cart</button>
            </div>
            <div className='w-[400px] h-[250px] text-center justify-center rounded-md
                    flex flex-col gap-4 items-center border border-[#003AAA] p-4'>
                <h1 className='text-[#003AAA] font-semibold'>OFFICE SOLUTION</h1>
                <p className='text-[#003AAA]'>We understand the unique challenges faced by edu
                    cational institutions, and we're here to provide holi
                    stic School Solutions that empower schools.</p>
                <button className='w-[150px] bg-[#003AAA] hover:bg-[#0039aabb] text-[#ffffff] p-2 my-4 rounded-md'>Add to Cart</button>
            </div>
            <div className='w-[400px] h-[250px] text-center justify-center rounded-md
                    flex flex-col gap-4 items-center border border-[#003AAA] p-4'>
                <h1 className='text-[#003AAA] font-semibold'>UNIVERSITY SOLUTION</h1>
                <p className='text-[#003AAA]'>We understand the unique challenges faced by edu
                    cational institutions, and we're here to provide holi
                    stic School Solutions that empower schools.</p>
                <button className='w-[150px] bg-[#003AAA] hover:bg-[#0039aabb] text-[#ffffff] p-2 my-4 rounded-md'>Add to Cart</button>
            </div>
        </div>
      
    </div>
  )
}

export default Solution
