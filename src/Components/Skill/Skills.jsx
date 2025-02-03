import React from 'react'
import ReactImg from '../../assets/Images/react.jpeg' 
import Js from '../../assets/Images/js.png'
import Css from '../../assets/Images/css.png'
import Html from '../../assets/Images/html.jpeg'
import Github from '../../assets/Images/github.png'
import Tailwind from '../../assets/Images/tailwind.png'

function Skills() {
  return (
    <div className="container bg-gray-900 text-white mx-auto h-auto max-w-full flex flex-col items-center justify-between px-8 pb-16 pt-18">
    <h1 className="mb-16 text-4xl font-bold"> My Skills </h1>
  
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      <div className="flex justify-center items-center">
        <img src={Html} alt="html logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer" />
      </div>
  
      <div className="flex justify-center items-center">
        <img src={Css} alt="css logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer" />
      </div>
  
      <div className="flex justify-center items-center">
        <img src={Js} alt="js logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer" />
      </div>
  
      <div className="flex justify-center items-center">
        <img src={Tailwind} alt="tailwind logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer" />
      </div>
  
      <div className="flex justify-center items-center">
        <img src={ReactImg} alt="react logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer" />
      </div>
  
      <div className="flex justify-center items-center">
        <img src={Github} alt="github logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer" />
      </div>
    </div>
  </div>
  
    
  
  )
}

export default Skills
