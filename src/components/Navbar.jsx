import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { BsFillFilePersonFill, BsFillStarFill } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  return (
    <div>
        <div className='hidden md:block'>
          <div className='flex justify-between bg-[#FF6464] '>
              <Link to = '/'><h3 className='px-4 py-2 font-bold text-3xl text-[#EDF7FA] hover:text-[#000] hover:scale-105 duration-200'>csuu</h3></Link>
              <div className='flex justify-end px-4'>
                <Link to = '/'><h3 className='px-2 py-4 text-[#EDF7FA] font-bold hover:text-[#000] hover:scale-105 duration-200'>About me</h3></Link>
                <Link to = '/experiences'><h3 className='px-2 py-4 text-[#EDF7FA] font-bold hover:text-[#000] hover:scale-105 duration-200'>Experiences</h3></Link>
                <Link to = '/projects'><h3 className='px-2 py-4 text-[#EDF7FA] font-bold hover:text-[#000] hover:scale-105 duration-200'>Projects</h3></Link>
              </div>
          </div>
        </div>

        {/* Mobile */}
        <div className=''>
          <div className='flex justify-between bg-[#FF6464] md:hidden'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
              <RxHamburgerMenu size={40} className='m-4 hover:scale-125 duration-200'/>
            </div>
                <Link to = '/'>
                  <button className='m-4 font-bold font-mono text-4xl text-[#EDF7FA] hover:scale-105 duration-200 hover:text-[#000]'>csuu</button>
                </Link>
          </div>

          {/* Menu bar */}
          {/* Overlay */}
          {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

          {/* Slide menu bar */}
          <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 
          'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <BiArrowBack 
            size={40}
            onClick={() => setNav(!nav)}
            className='absolute left-4 top-4 cursor-pointer hover:scale-125 duration-200'/>
            <nav>
                <ul className='flex flex-col p-4 mt-8 font-bold text-gray-800'>
                <Link to = '/'><li className='text-xl py-4 mt-2 flex hover:text-[#FF6464] hover:scale-105 duration-200'><BsFillFilePersonFill size={35} className='mr-3'/>About me</li></Link>
                <Link to = '/experiences'><li className='text-xl py-4 flex hover:text-[#FF6464] hover:scale-105 duration-200'><BsFillStarFill size={35} className='mr-3'/>Experieces</li></Link>
                <Link to = '/projects'><li className='text-xl py-4 flex hover:text-[#FF6464] hover:scale-105 duration-200'><FaLaptopCode size={35} className='mr-3'/>Projects</li></Link>
                </ul>
            </nav>    
          </div>
        </div>
    </div>
  )
}

export default Navbar