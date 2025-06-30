import React from 'react'
import { categories } from '../data/data.js';

const Category = () => {
  return (
    <section className='max-w-[1640px] px-4 py-12 m-auto'>
           <h1 className='text-center  text-orange-600 font-bold text-3xl sm:text-4xl '>Top Rated Menu Items</h1>
           <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item,index)=>{
                    return <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                          <h2 className='font-bold text-[17px] sm:text-xl'>{item.name}</h2>
                          <img src={item.image} alt={item.name} className='w-20' />
                    </div>
                })}  
           </div>
    </section>
  )
}

export default Category;
