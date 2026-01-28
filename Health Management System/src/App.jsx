import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

let asset = {
  logo_url : './logo.png',
  scene : './scene.png'
}

// Fixed naming convention (Capitalize component names)
function HamburgerMenu(){
  return(
    <div className='absolute top-[50px] left-0 w-[300px] h-[670px] bg-white border-2 border-red-600 z-10'>
      <ul className='flex flex-col gap-4 p-4'>
        {[1, 2, 3, 4].map((_, i) => (
          <li key={i} className="flex items-center gap-3 cursor-pointer hover:text-[#4747ed]">
            <FontAwesomeIcon icon={faPaperPlane} />
            <p>Flights</p>
          </li>
        ))}
        <hr className="border-gray-200"/>
        <li className="flex items-center gap-3 cursor-pointer">
          <FontAwesomeIcon icon={faPaperPlane} />
          <p>Settings</p>
        </li>
      </ul>
    </div>
  )
}

function Hello() {
  return (
   <div className="w-screen h-screen overflow-x-hidden font-sans">
     {/* Navbar */}
     <div className='relative flex items-center w-screen h-[50px] shadow-[0px_0px_1px_rgb(139,139,139)]'>
       
       {/* Hamburger Icon */}
       <div className='absolute left-0 top-1/2 -translate-y-1/2 ml-[10px] w-[30px] h-[30px] flex flex-col justify-around cursor-pointer'>
        <span className='w-[70%] h-1 bg-[#4747ed] rounded-full'></span>
        <span className='w-full h-1 bg-[#4747ed] rounded-full'></span>
        <span className='w-[70%] h-1 bg-[#4747ed] rounded-full'></span>
       </div>

       {/* Logo Cont */}
       <div className='flex items-center justify-center w-1/5 h-full gap-0 text-[#4747ed] text-[20px] font-bold'>
          <img src={asset.logo_url} alt="logo" className='h-full'/>
          <h2 className='hidden md:block'>AI planner</h2>
       </div>

       {/* Navlist */}
       <div className='flex items-center justify-end w-[80%] h-full gap-5'>
          <ul className='flex gap-7'>
            <li className='list-none text-[15px] cursor-pointer hover:text-[#4747ed] transition-colors'>Find Booking</li>
            <li className='list-none text-[15px] cursor-pointer hover:text-[#4747ed] transition-colors'>Contact us</li>
            <li className='list-none text-[15px] cursor-pointer hover:text-[#4747ed] transition-colors'>Customer booking</li>
          </ul>
          <button className='mr-5 bg-[#4747ed] text-white py-[6px] w-[90px] rounded-[10px] border-2 border-transparent hover:bg-blue-700 transition-all cursor-pointer flex justify-center items-center'>
            Login
          </button>
       </div>
     </div>

     {/* Hamburger Menu Component */}
     <HamburgerMenu/>

     {/* Prompt Section */}
     <div className='flex items-end justify-center w-screen h-[60vh] relative'>
       <img src={asset.scene} className='absolute top-0 left-50 -translate-x-50 w-full h-auto -z-10' alt='imag'/>
       
       <div className='relative flex items-center justify-center w-[70%] h-[200px] border-2 border-[#4747ed] rounded-[12px] bg-white/80 backdrop-blur-sm mb-10'>
          <textarea 
            className='w-[99%] h-[99%] p-[18px] bg-transparent border-none outline-none resize-none text-black placeholder:font-sans' 
            placeholder='Describe your places .......'
          ></textarea>
          
          <button className='absolute bottom-[18px] right-[18px] w-10 h-10 bg-[#4747ed] rounded-full flex justify-center items-center border-none cursor-pointer'>
            <FontAwesomeIcon icon={faPaperPlane} className='text-white rotate-45 pt-[2px] pr-[2px]' />
          </button>
       </div>
     </div>
   </div>
  );
}

export default Hello;