import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail, MdCall } from 'react-icons/md'

const Footer = () => {
  return (
    <div>
        {/* Desktop */}
        <div className='p-10 bg-gray-300 hidden md:block'>
          <div class=' flex flex-row justify-center text-4xl'>
                <a href='https://www.linkedin.com/in/woranon-chankaew//' target='_blank' rel='Linkedin' class='mx-2 hover:text-[#0072b1] hover:scale-125 duration-200'>
                    <BsLinkedin />
                </a>
                <a href='https://github.com/timworanon?tab=repositories' target='_blank' rel='GitHub' class='mx-2 hover:text-[#6e5494] hover:scale-125 duration-200'>
                    <BsGithub />
                </a>
            </div>
            <div>
            <p className='flex flex-row justify-center text-xl mt-2'><MdEmail size={30} className='mr-2 hover:text-[#FF6464]'/><span className='hover:text-[#FF6464]'>woranon.cnk@gmail.com</span></p>
            <p className='flex flex-row justify-center text-xl mt-2'><MdCall size={30} className='mr-2 hover:text-[#FF6464]'/><span className='hover:text-[#FF6464]'>095-618-6041</span></p>
            </div>
        </div>

        {/* Mobile */}
        <div class='p-10 bg-gray-300 md:hidden'>
            <div class=' flex flex-row justify-center text-4xl'>
                <a href='https://www.linkedin.com/in/woranon-chankaew//' target='_blank' rel='Linkedin' class='mx-2 hover:text-[#0072b1] hover:scale-125 duration-200'>
                    <BsLinkedin />
                </a>
                <a href='https://github.com/timworanon?tab=repositories' target='_blank' rel='GitHub' class='mx-2 hover:text-[#6e5494] hover:scale-125 duration-200'>
                    <BsGithub />
                </a>
            </div>
            <div>
            <p className='flex flex-row justify-center text-xl mt-2'><MdEmail size={30} className='mr-2 hover:text-[#FF6464]'/><span className='hover:text-[#FF6464]'>woranon.cnk@gmail.com</span></p>
            <p className='flex flex-row justify-center text-xl mt-2'><MdCall size={30} className='mr-2 hover:text-[#FF6464]'/><span className='hover:text-[#FF6464]'>095-618-6041</span></p>
            </div>
        </div>

    </div>
  )
}

export default Footer