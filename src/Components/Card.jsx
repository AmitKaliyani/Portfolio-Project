import React from 'react'
import { Link } from 'react-router'


function Card(props) {
  return (
   <div className="project border-2 border-blue-400 rounded-lg shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="project-img mb-4">
              <img 
                src={props.img} 
                alt={props.name}
                className='h-40 w-40 object-cover bg-pink-400 rounded-lg transition-all duration-300 hover:opacity-80'
              />
            </div>
            <div className="project-info text-center">
              <h3 className='text-xl font-semibold'>{props.name}</h3>
              <p className='mt-2 text-sm mb-2'>A weather forecasting app using a weather API.</p>
              <Link to={props.link} className='text-lg underline hover:text-red-500'>Live</Link>
            </div>
          </div>
  )

}

export default Card
