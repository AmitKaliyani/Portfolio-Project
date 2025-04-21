import React from 'react'
import Weather from '../../assets/Images/weather.jpeg'
import Todo from '../../assets/Images/todo.png'
import Ecom from '../../assets/Images/ecom.jpeg'
import Card from '../Card'

function Project() {
  return (
    <div  id='project' className='container bg-gray-800 text-white mx-auto h-auto max-w-full flex flex-col items-center justify-start px-8 py-16'>
      <h1 className='mb-12 text-4xl font-bold text-center'>My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-16">

     <Card img={Ecom} name={"AkShop"} link={'https://ak-shop-e-commerce-6a2k.vercel.app/'} />
     <Card img={Weather} name={"WeatherApp"} link={"https://weather-app-eta-sandy-33.vercel.app/"} />
     <Card img={Todo}  name={"TodoApp"} link={"https://todo-app-puce-omega.vercel.app/"}/>
        

      </div>
    </div>
  )
}

export default Project

