import React from 'react'

const HeadlineCards = () => {
  return (
    <section className='max-w-[1640px] mx-auto sm:ml-2 p-4 py-8 grid  md:grid-cols-3 gap-4'>
           {/*Card*/}
           <div className='rounded-xl w-full  relative '>
                 <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
                    <p className='text-2xl font-bold px-2 pt-4 '>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                     <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                  </div>
                <img className='object-cover max-h-[160px] md:max-h-[200px] w-full rounded-xl ' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="food image" />
           </div>
           <div className='rounded-xl w-full  relative '>
                 <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
                    <p className='text-2xl font-bold px-2 pt-4 '>New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                     <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                  </div>
                <img className='object-cover max-h-[160px] md:max-h-[200px] w-full rounded-xl ' src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg" alt="food image" />
           </div>
           <div className='rounded-xl w-full  relative '>
                 <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
                    <p className='text-2xl font-bold px-2 pt-4 '>We Deliver Desserts</p>
                    <p className='px-2'>Through 8/26</p>
                     <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                  </div>
                <img className='object-cover max-h-[160px] md:max-h-[200px] w-full rounded-xl ' src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg" alt="food image" />
           </div>
           
           
           
           
    </section>
  )
}

export default HeadlineCards;
