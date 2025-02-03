import React from 'react'
import Img1 from '../../assets/Images/hero.jpeg'

function Hero() {
  return (
//    <div className="container bg-black text-white  mx-auto h-72  max-w-full">
//     <div className="left w-[50%] ">
//         <div className="info  px-12">
//             <p>Web Devloper,</p>
//             <h1 className='text-[2.5rem] ms-4'>I am <span className='text-pink-500'>Amit</span> </h1>
//             <h3 className='text-[2.5rem] ms-4'>Front-End Devloper</h3>
//             <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero deserunt autem, iure officiis impedit provident. Quisquam quas labore quia repellat modi sit explicabo praesentium fuga optio? Obcaecati ab quo et.</p>
//         </div>
//     </div>

//     <div className="right"></div>
//    </div>

<div className="container bg-gray-900 text-white mx-auto h-auto max-w-full flex items-center justify-between px-8 pb-12 pt-20">

<div className="left w-full md:w-1/2 mt-16 md:mt-0 px-10 ">
  <div className="info">
    {/* <p className="text-lg mb-2">Web Developer,</p> */}
    <h1 className
    ="text-4xl font-bold mb-2">
      I am <span className="text-pink-500">Amit</span>
    </h1>
    <h3 className="text-3xl font-semibold mb-4">Front-End Developer</h3>
    <p className="text-sm w-[80%]">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero deserunt autem, iure officiis impedit provident. Quisquam quas labore quia repellat modi sit explicabo praesentium fuga optio? Obcaecati ab quo et.
    </p>
  </div>
</div>

<div className="right w-full md:w-1/2 flex justify-center items-center ">
  <div className="w-64 h-64 bg-pink-500 rounded-full ">
    <img src={Img1} alt="hero"  className='w-64 h-64 bg-pink-500 rounded-full object-cover'/>
    </div> 
</div>

</div>


  )
}

export default Hero
