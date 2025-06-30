import React from 'react'

const FoodCards = ({data}) => {
  return (
    <div className='border shadow-2xl h-fit hover:scale-105 transition-all duration-300 rounded-lg'>
        <img src={data.image} alt={data.name} className='h-[200px] w-full object-cover rounded-t-lg' />
        <div className='flex justify-between px-3 py-4'>
            <p className='font-bold '>{data.name}</p>
            <p><span className='bg-orange-500 text-white p-1 rounded-full text-sm'>{data.price}</span></p>
        </div>

    </div>
  )
}

export default FoodCards;
