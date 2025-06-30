import React, { useEffect, useState,useRef } from 'react'
import {data} from '../data/data.js'
import FoodCards from './FoodCards.jsx';

const Food = () => {
     const [Data,setData] = useState(data);

     const handleFilterByCategory = (category) => {
        if (category === 'all'){
          setData(data);
        }
        else {
           setData(data.filter(item=>{
             return item.category === category
           }))
        }
      };
      const handleFilterByPrice= (price)=>{
           setData(data.filter(item=>{
            return item.price ===price;
           }))
      }
      
      
  return (
    <section className='max-w-[1640px] m-auto px-4 py-12 '>
           <h2 className='text-orange-600 text-3xl sm:text-4xl font-bold text-center'>Top Rated Menu Items</h2>
            {/*Fliter Row*/}
             <div className='flex flex-col  lg:flex-row lg:justify-between items-center gap-2 mt-2'>
                 
                {/*Fliter type*/}
                  <div >
                        <p className='font-bold text-gray-700 mb-1'>Filter Type</p>
                        <div className='grid grid-cols-3 sm:grid-cols-5 gap-1'>
                            <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ' onClick={()=> handleFilterByCategory("all")}>All</button>
                            <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ' onClick={()=> handleFilterByCategory("burger")}>Burgers</button>
                            <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ' onClick={()=> handleFilterByCategory("pizza")}>Pizza</button>
                            <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ' onClick={()=> handleFilterByCategory("salad")} >Salads</button>
                            <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ' onClick={()=> handleFilterByCategory("chicken")}>Chickens</button>
                        </div>
                  </div>
                  {/*Filter Price*/}
                     <div>
                           <p className='font-bold text-gray-700 mb-1' >Filter Price</p>
                            <div className='grid grid-cols-5 gap-2'>
                                <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white 'onClick={()=>handleFilterByPrice("$")} >$</button>
                                <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white 'onClick={()=>handleFilterByPrice("$$")}>$$</button>
                                <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white' onClick={()=>handleFilterByPrice("$$$")}>$$$</button>
                                <button className='border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ' onClick={()=>handleFilterByPrice("$$$$")}>$$$$</button>
                            </div>
                
                     </div>
             </div>
              {/*display the foods*/}
             <div className='grid grid-cols-2 lg:grid-cols-4 py-8 gap-6'>
                  {Data.map((data,index)=>{
                     return < FoodCards key={index} data = {data} />
                  })}
                  
             </div>
    </section>
  )
}

export default Food;
