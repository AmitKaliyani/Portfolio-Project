import React from 'react'

function Project() {
  return (
    <div className='container bg-gray-800 text-white mx-auto h-auto max-w-full flex flex-col items-center justify-start px-8 py-16'>
    <h1 className='mb-12 text-4xl font-bold text-center'>My Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-16">
      
        <div className="project border-2 border-blue-400 rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="project-img mb-4">
                <img src="" alt="Project 1" className='h-40 w-40 object-cover bg-pink-400 rounded-lg' />
            </div>
            <div className="project-info text-center">
                <h3 className='text-xl font-semibold'>Calculator App</h3>
                <p className='mt-2 text-sm'>A simple calculator app built using JavaScript.</p>
            </div>
        </div>

      
        <div className="project border-2 border-blue-400 rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="project-img mb-4">
                <img src="" alt="Project 2" className='h-40 w-40 object-cover bg-pink-400 rounded-lg' />
            </div>
            <div className="project-info text-center">
                <h3 className='text-xl font-semibold'>Weather App</h3>
                <p className='mt-2 text-sm'>A weather forecasting app using a weather API.</p>
            </div>
        </div>

        
        <div className="project border-2 border-blue-400 rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="project-img mb-4">
                <img src="" alt="Project 3" className='h-40 w-40 object-cover bg-pink-400 rounded-lg' />
            </div>
            <div className="project-info text-center">
                <h3 className='text-xl font-semibold'>To-Do List</h3>
                <p className='mt-2 text-sm'>A simple to-do list application to manage tasks.</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Project
