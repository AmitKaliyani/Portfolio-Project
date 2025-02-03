import React from 'react'
import Img1 from '../../assets/Images/hero.jpeg'

function Home() {
  return (

<div className="container bg-gray-900 text-white mx-auto h-auto max-w-full flex flex-col sm:flex-row items-center justify-between px-8 pb-16 pt-24">
  
  {/* Left Section */}
  <div className="left w-full md:w-1/2 mt-16 md:mt-0 sm:px-6 md:px-10">
    {/* <div className="info border-2 border-white -mt-24  text-2xl">
      <h1 className="text-4xl font-bold mb-2">
        I am <span className="text-pink-500">Amit</span>
      </h1>
      <h3 className="text-3xl font-semibold mb-4">Front-End Developer</h3>
      <p className="text-sm sm:text-base w-full max-w-xl">
        Passionate about building beautiful and functional websites. I focus on creating clean, responsive, and user-friendly interfaces.
      </p>
    </div> */}
    <div className="info text-center sm:px-2  -mt-12 sm:mt-1 text-2xl">
  <h1 className=" text-4xl  font-bold mb-2 sm:mb-4">
    I am <span className="text-pink-500">Amit</span>
  </h1>
  <h3 className="  text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Front-End Developer</h3>
  <p className="text-sm sm:text-base w-full max-w-xl">
    Passionate about building beautiful and functional websites. I focus on creating clean, responsive, and user-friendly interfaces.
  </p>
</div>

  </div>

 
  <div className="right w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
    <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-500 rounded-full overflow-hidden">
    
      <img 
        src={Img1} 
        alt="Portrait of Amit, a Front-End Developer" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>

</div>


  )
}

export default Home
