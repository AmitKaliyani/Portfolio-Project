import React from 'react'
import Img2 from '../../assets/Images/about.jpeg'

function About() {
  return (
    <div className="container bg-gray-800 text-white mx-auto h-auto max-w-full flex flex-col sm:flex-row items-center justify-between px-8 pb-16 pt-14 sm:pt-24">

      {/* Right Image Section */}
      <div className="right w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-500 rounded-full overflow-hidden shadow-lg shadow-pink-400/30">
          <img 
            src={Img2} 
            alt="Portrait of Amit, a Front-End Developer" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Left Text Section */}
      <div id='about' className="left w-full md:w-1/2 mt-16 md:mt-0 px-6 md:px-10">
        <div className="info -mt-2">
          <h1 className="text-4xl font-bold mb-2 text-center">About Me</h1>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Professional Web Developer</h3>

          <div className="para min-w-full">
            <p className="text-sm sm:text-base w-full max-w-xl mb-4">
              Hello! I'm Amit, a dedicated Front-End Developer with a passion for creating sleek, responsive, and interactive websites that not only look good but also perform seamlessly.
            </p>
            <p className="text-sm sm:text-base w-full max-w-xl mb-4">
              I enjoy turning complex problems into simple, beautiful, and intuitive designs. My focus is always on writing clean and efficient code, keeping user experience at the center.
            </p>
            <p className="text-sm sm:text-base w-full max-w-xl mb-4">
              I’m constantly learning and evolving with new technologies and trends to ensure that the solutions I build are modern and impactful.
            </p>
          
            <p className="text-sm sm:text-base w-full max-w-xl mb-4">
              My goal is to grow as a developer while helping brands and businesses grow online. Let's build something amazing together!
            </p>
          </div>

          <div className='flex justify-center items-center mt-5'>
            <button className='px-6 py-2 bg-pink-600 text-white hover:bg-pink-400 rounded-lg cursor-pointer transition-all duration-200'>
              <a href="https://www.instagram.com/amit_kaliyani_007" target="_blank" rel="noreferrer">Download CV</a>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
