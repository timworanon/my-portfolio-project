import React from 'react'
import Layout from './Layout'
import Footer from './Footer'

const Experiences = () => {
  return (
    <Layout>
      <div className='max-w-[1640] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-black max-h-[500px] m-20'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl '>Experiences</h1>
          </div>
        </div>
          <img className='w-full max-h-[800px] object-cover' src="https://img.freepik.com/free-psd/marketing-concept-with-woman-rocketship_23-2149835037.jpg?w=900&t=st=1695479439~exp=1695480039~hmac=5015d2d531cf362013f231dfbefbe1b600391fea56c4b7aff84f47cdbc71c764" alt="/" />
      </div>

      {/* Work */}
      <div>
        <h1 className='p-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Work</h1>
        <div className='px-12 py-2'>
          <h2 className='px-8 pt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FF6464] font-bold'>Web developer trainee <span className='text-gray-600'>| Generation Thailand </span><span className='text-gray-400 font-semibold text-sm'>(Jul 2023 - Oct 2023)</span></h2>
          <ul className='px-14 pt-2 text-l sm:text-xl md:text-2xl lg:text-3xl'>
            <li className='list-disc px-2'>The application website is divided into front-end using React with React-router and Axios as the main dependency. In the back-end, it uses Express to manage RESTful API and uses PassportJS for authentication. Finally, using Mongoose to connect MongoDB </li>
            <li className='list-disc px-2'>Learned how to build web applications from React as front-end, Node.js as back end, and MongoDB as a Database</li>
            <li className='list-disc px-2'>Learned essential skills for switching careers, such as growth mindset, communication, agile, and teamwork</li>
          </ul>
        </div>
        <div className='px-12 py-2'>
          <h2 className='px-8 pt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FF6464] font-bold'>Service engineer <span className='text-gray-600'>| Medisurge Co.,Ltd. </span><span className='text-gray-400 font-semibold text-sm'>(Sep 2031 - Apr 2023)</span></h2>
          <ul className='px-14 pt-2 text-l sm:text-xl md:text-2xl lg:text-3xl'>
            <li className='list-disc px-2'>Prepared the device to be ready for use and collaborated in cases with surgical assistants </li>
            <li className='list-disc px-2'>Demonstrated the product and its usage in surgical cases </li>
            <li className='list-disc px-2'>Worked intensively with the team to reprocess the reusable device (flexible endoscope)  </li>
            <li className='list-disc px-2'>Serviced and maintained devices after installing the product in public and private hospitals </li>
          </ul>
        </div>
        
        {/* Edication */}
        <div className='py-8'>
          <h1 className='p-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Education</h1>
          <div className='px-12 py-2'>
            <h2 className='px-8 pt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FF6464] font-bold'>Junior Software Developer Bootcamp<span className='text-gray-600'> | Generation Thailand </span><span className='text-gray-400 font-semibold text-sm'>(Jul 2023 - Oct 2023)</span></h2>
          </div>
          <div className='px-12 py-2'>
            <h2 className='px-8 pt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FF6464] font-bold'>Bachelor of applied science, Industrial physics and Medical instrumentation<span className='text-gray-600'> | King’s Mongkut University of Technology North Bangkok, Thailand </span><span className='text-gray-400 font-semibold text-sm'>(Aug 2017 - May 2021)</span></h2>
          </div>
        </div>
      </div>
      <div>
          <Footer />
      </div>
    </Layout>
  )
}

export default Experiences