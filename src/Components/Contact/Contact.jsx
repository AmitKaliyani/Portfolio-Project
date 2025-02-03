import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {useForm} from 'react-hook-form'

function Contact() {
    
    const {register,trigger,formState:{errors},handleSubmit} = useForm()
   const submitHandler = (value)=>{
    // e.preventDefault()
    // console.log(value);
    
   }

  return (
    <div className='container bg-gray-900 text-white mx-auto h-auto max-w-full flex flex-col items-center justify-start px-8 py-16'>
       <h1 className='text-4xl text-center font-bold'>Contact Me </h1>
      
       <div className="container mx-auto px-4 py-8">
    <h3 className="text-center text-xl font-semibold mb-6">Please Fill out the form below to discuss any work opportunities</h3>
    
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler())}>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold mb-2" >Your Name</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Your Name"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  
                    {...register("username",{required:"username is required",
                     pattern:{value:/^[a-zA-Z]+/,message:"Alphabets Only"}})}
                    onBlur={()=>trigger('username')}
                />
            {errors.username && <span className='text-red-700'>{errors.username.message}</span>}

            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold mb-2">Your Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                   
                    {...register("email" , {required:"email is required" , 
                        pattern:{value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/ , message:"Invalid Email"}
                      })}
                       onBlur={()=>trigger('email')}
                />
            {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold mb-2">Your Message</label>
                <textarea
                                name="message"
                                placeholder="Write your message here"
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows="4"
                                {...register("message", { required: "Message is required" })}
                                onBlur={()=>trigger("message")}
                            />
                            {errors.message && <span className='text-red-700'>{errors.message.message}</span>}
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Send Message
            </button>
        </form>
    </div>

</div>
   
<div className="flex space-x-4">

<a href="https://www.linkedin.com/in/amit-kaliyani-7b60ab342/" target="_blank" className="text-blue-700 hover:text-blue-900">
  <FaLinkedin className='text-3xl' />
  </a>

  <a href="https://github.com/AmitKaliyani" target="_blank" className="text-gray-800 hover:text-gray-600">
  <FaGithub  className='text-3xl'/>
  </a>
 
  <a href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">
  <FaTwitter className='text-3xl'/>
  </a>

  <a href="https://www.instagram.com/amit_kaliyani_007" target="_blank" className="text-pink-600 hover:text-pink-800">
  <FaInstagram  className='text-3xl'/>
  </a>
</div>


       


    </div>
  )
}

export default Contact
