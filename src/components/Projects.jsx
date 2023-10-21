import React from 'react'
import Layout from './Layout'
import Footer from './Footer'
import img1 from '../../public/Images/Capture.svg'
import img2 from '../../public/Images/Capture2.svg'

const Projects = () => {
  return (
    <Layout>
        <h1 className="px-4 pt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Projects</h1>
          <div className="container mt-10 max-w-[1640px] mx-auto bg-[#EDF7FA]">
            <div className='max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-6'>
                {/* Cards 1 */}
                <a href="https://thai-food-project.vercel.app/" target='_blank' rel='thai food'>
                  <div className=' rounded-xl relative hover:scale-105 duration-300'>
                      {/* Overlay */}
                      <div className='absolute w-full h-full bg-black/30 rounded-xl text-white hover:text-[#ffe564]'>
                          <p className='font-bold text-2xl px-4 pt-4'>Your Testy</p>
                          <p className='px-4 font-bold'>The UI web page features famous Thai foods</p>
                          <p className='px-4 font-bold'>Tools: React/Tailwind/JavaScript</p>
                      </div>
                      <img 
                      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                      src={img1} alt="/" />
                  </div>
                </a>

                {/* Cards 2 */}
                <a href="https://replit.com/@parintim345/63-find-your-hat#index.js" target='_blank' rel='find you hat'>
                  <div className=' rounded-xl relative hover:scale-105 duration-300'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/30 rounded-xl text-white hover:text-[#ffe564]'>
                        <p className='font-bold text-2xl px-4 pt-4'>CSS</p>
                        <p className='px-4 font-bold'>The mini game runs in a console browser</p>
                        <p className='px-4 font-bold'>Tools: JavaScript</p>
                    </div>
                    <img 
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src={img2} alt="/" />
                  </div>
                </a>
            </div>
          </div>
        <div>
          <Footer />
        </div>
    </Layout>
  )
}

export default Projects