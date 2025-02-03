import React from 'react'
import Img2 from '../../assets/Images/about.jpeg'

function About() {
  return (
<div className="container bg-gray-800 text-white mx-auto h-auto max-w-full flex flex-col  sm:flex-row items-center justify-between px-8 pb-16 pt-14 sm:pt-24">

  <div className="right w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
    <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-500 rounded-full overflow-hidden">
      <img 
        src={Img2} 
        alt="Portrait of Amit, a Front-End Developer" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>


  <div className="left w-full md:w-1/2 mt-16 md:mt-0 px-6 md:px-10">
    <div className="info -mt-2">
      <h1 className="text-4xl font-bold mb-2 text-center ">About Me</h1>
      <h3 className=" text-2xl sm:text-3xl  font-semibold mb-4 text-center">Proffesional Web devloper</h3>

      <div className="para min-w-full">
      <p className="text-sm sm:text-base w-full max-w-xl mb-4 sm:  ">
        Passionate about building beautiful and functional websites. I focus on creating clean, responsive, and user-friendly interfaces.
      </p>
      <p className="text-sm sm:text-base w-full max-w-xl  mb-2 sm:mb-4">
        Passionate about building beautiful and functional websites. I focus on creating clean, responsive, and user-friendly interfaces.
      </p>
      <p className="text-sm sm:text-base w-full max-w-xl mb-2 sm:mb-4">
        Passionate about building beautiful and functional websites. I focus on creating clean, responsive, and user-friendly interfaces.
      </p>
      <p className="text-sm sm:text-base w-full max-w-xl mb-2 sm:mb-4">
        Passionate about building beautiful and functional websites. I focus on creating clean, responsive, and user-friendly interfaces.
      </p>
      <p className="text-sm sm:text-base w-full max-w-xl mb-2 sm:mb-4">
        Passionate about building beautiful and functional websites. I focus on creating clean, responsive, and user-friendly interfaces.
      </p>
      </div>
      <div className='flex justify-center items-center mt-5'>
      <button className='px-6 py-2 bg-pink-600 text-white hover:bg-pink-400 rounded-lg cursor-pointer transition-all duration-200'>
        <a href="https://www.instagram.com/amit_kaliyani_007"> Download CV </a>
      </button>
     </div>

    </div>
  </div>

 

</div>

  )
}

export default About
