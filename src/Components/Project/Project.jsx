import React from 'react'
import Weather from '../../assets/Images/weather.jpeg'
import Todo from '../../assets/Images/todo.png'
import Ecom from '../../assets/Images/ecom.jpeg'

function Project() {
  return (
    <div className='container bg-gray-800 text-white mx-auto h-auto max-w-full flex flex-col items-center justify-start px-8 py-16'>
      <h1 className='mb-12 text-4xl font-bold text-center'>My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-16">

        <div className="project border-2 border-blue-400 rounded-lg shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <div className="project-img mb-4">
            <img 
              src={Ecom} 
              alt="E-commerce website" 
              className='h-40 w-40 object-cover bg-pink-400 rounded-lg transition-all duration-300 hover:opacity-80'
            />
          </div>
          <div className="project-info text-center">
            <h3 className='text-xl font-semibold'>E-Commerce</h3>
            <p className='mt-2 text-sm'>A full-fledged E-commerce Website built with React.</p>
          </div>
        </div>

        <div className="project border-2 border-blue-400 rounded-lg shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <div className="project-img mb-4">
            <img 
              src={Weather} 
              alt="Weather App" 
              className='h-40 w-40 object-cover bg-pink-400 rounded-lg transition-all duration-300 hover:opacity-80'
            />
          </div>
          <div className="project-info text-center">
            <h3 className='text-xl font-semibold'>Weather App</h3>
            <p className='mt-2 text-sm'>A weather forecasting app using a weather API.</p>
          </div>
        </div>

       
        <div className="project border-2 border-blue-400 rounded-lg shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <div className="project-img mb-4">
            <img 
              src={Todo} 
              alt="To-Do List App" 
              className='h-40 w-40 object-cover bg-pink-400 rounded-lg transition-all duration-300 hover:opacity-80'
            />
          </div>
          <div className="project-info text-center">
            <h3 className='text-xl font-semibold'>To-Do List</h3>
            <p className='mt-2 text-sm'>A simple to-do list app to help you manage tasks.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project

