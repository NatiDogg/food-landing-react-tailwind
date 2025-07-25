import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSave2Fill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdWallet,MdHelp} from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa'


const NavBar = () => {
   const [sideBar,setSideBar] = useState(false);
    function handleSideBar(){
         setSideBar(prevBar=> !prevBar);
    }

  return (
     <header className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
          <div className='flex items-center ' >
              <div className='cursor-pointer'>
                 <AiOutlineMenu onClick={handleSideBar} size={30} />
              </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 mr-2'>Best <span className='font-bold'>Eats</span></h1>
                <div className='hidden lg:flex items-center  bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2 -ml-3'>Delivery</p>
                     <p className='p-2'>Pickup</p>
                </div>
          </div>
          <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] lg:w-[500px] '>
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder='Search food..' className='bg-transparent p-2 focus:outline-none w-full  ' />
          </div>
           <button className=' bg-black text-white rounded-full hidden md:flex items-center py-2 gap-2 '>
               <BsFillCartFill size={20} /> Cart
           </button>

           {/*mobile menu*/}
           {sideBar && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '></div>}
                 <div className={sideBar ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-700'}>
                        <AiOutlineClose onClick={handleSideBar} size={25} className='absolute right-4 top-4 cursor-pointer' />
                         <h2 className='text-xl sm:text-2xl  p-3'>Best <span className='font-bold'>Eats</span></h2>
                         <nav >
                            <ul className='flex flex-col p-4 text-gray-800'>
                               <li className='text-[18px] py-4 flex items-center'><TbTruckDelivery size={20} className="mr-3" />Orders</li>
                               <li className='text-[18px] py-4 flex items-center'><MdFavorite size={20} className="mr-3" />Favorites</li>
                               <li className='text-[18px] py-4 flex items-center'><FaWallet size={20} className="mr-3" />Wallet</li>
                               <li className='text-[18px] py-4 flex items-center'><MdHelp size={20} className="mr-3" />Help</li>
                               <li className='text-[18px] py-4 flex items-center'><AiFillTag size={20} className="mr-3" />Promotions</li>
                               <li className='text-[18px] py-4 flex items-center'><BsFillSave2Fill size={20} className="mr-3" />Best One</li>
                               <li className='text-[18px] py-4 flex items-center'><FaUserFriends size={20} className="mr-3" />Invite Friends</li>
                            </ul>
                          </nav>
                 </div>
     </header>
  )
}

export default NavBar;
