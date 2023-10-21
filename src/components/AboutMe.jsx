import Layout from "./Layout"
import Footer from "./Footer"

const AboutMe = () => {

  return (
    <Layout>
        <div className="max-w-[1640px] mx-auto p-4">
          {/* Header */}
          {/* Overlay */}
          <div className="max-h-[500px] relative">
            <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center">
              <h1 className="px-4 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Hi, I am <span className="text-[#FF6464]">Tim</span>,</h1>
              <h1 className="px-4 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"> <span className="text-[#FF6464]">Woranon</span> Chankaew</h1>
              <h1 className="px-4 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"><span className="text-[#c2d3ff]">Junior Web Developer</span></h1>
              <p className="px-4 pt-2 pb-4 text-l sm:text-xl md:text-2xl lg:text-3xl font-bold">get better at HTML, CSS, JavaScript, and the MERN stack.</p>
            </div>
            <img className="w-full max-h-[500px] object-cover" src="https://img.freepik.com/free-psd/3d-illustration-people-working-marketing_23-2150417380.jpg?w=900&t=st=1695307919~exp=1695308519~hmac=de54eb1249e669608d3a7aa6807b17a35ec462c0d627e9646eab2d4672e0b0e5" alt="/" />
              <a href="https://drive.google.com/file/d/1l-4eI-qDgyTdWvVJD9MtuT1R62FCyViM/view?usp=sharing" target="_blank" rel="CV/Resume" className="p-2 absolute font-bold  text-gray-200 bg-[#FF6464] hover:text-[#000]">Download resume</a>        
          </div>
        </div>

        {/* Skills */}
        <div className="container mt-10 max-w-[1640px] mx-auto bg-[#EDF7FA]">
          <h1 className="px-4 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Skills</h1>
          <div className='max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-6'>
              {/* Cards 1 */}
            <div className=' rounded-xl relative hover:scale-105 duration-300'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>HTML</p>
                    <p className='px-4 '>Hypertext Markup Language</p>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.png" alt="/" />
            </div>

              {/* Cards 2 */}
              <div className=' rounded-xl relative hover:scale-105 duration-300'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>CSS</p>
                    <p className='px-4 '>
                      Tailwind <br />
                      Bootstrap</p>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.png" alt="/" />
            </div>

             {/* Cards 3 */}
             <div className=' rounded-xl relative hover:scale-105 duration-300'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>JavaScript</p>
                    <p className='px-4 '>
                      JavaScript <br />
                      JavaScript ES6</p>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969" alt="/" />
            </div>

             {/* Cards 4 */}
             <div className=' rounded-xl relative hover:scale-105 duration-300'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>React</p>
                    <p className='px-4 '>Vite</p>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="/" />
            </div>

             {/* Cards 5 */}
             <div className=' rounded-xl relative hover:scale-105 duration-300'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Node.js</p>
                    <p className='px-4 '>Express.js</p>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://miro.medium.com/v2/resize:fit:800/1*COvz0L3FUapYYbsQHHZ90g.png" alt="/" />
            </div>

            {/* Cards 6 */}
            <div className=' rounded-xl relative hover:scale-105 duration-300'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>MongoDB</p>
                    <p className='px-4 '>
                      MongDBCompass <br />
                      NoSQL</p>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png" alt="/" />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
    </Layout>
    
  )
}


export default AboutMe