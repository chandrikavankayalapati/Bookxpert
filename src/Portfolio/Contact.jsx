import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white'>
        <div className='mx-auto p-24'>
            <div className='px-12 md:px-20'>
                <h1 className='text-4xl font-bold  border-b-4 border-gray-400 w-fit'>Contact</h1>
                <p className='text-lg text-gray-400 pt-3'>Submit the form below to get in touch with me</p>
            </div>
            <div className=''>
            <form action="https://getform.io/f/azyneojb" method='POST' className='flex flex-col justify-center items-center py-10 gap-8 '>
                <input className='hover:outline-0 outline-0 ring ring-cyan-500 rounded-lg shadow-sm shadow-cyan-500 text-center '
                       type="text" 
                       name="name"
                       placeholder='Enter Your Name'
                       size={30}
                       
                />
                <input className='hover:outline-0 outline-0 ring ring-cyan-500 rounded-lg shadow-sm shadow-cyan-500 text-center'
                      type="email"
                       name="name"
                       placeholder="enter Your Email"
                       size={30}
                />
                <textarea className='hover:outline-0 outline-0 ring ring-cyan-500 rounded-lg shadow-sm shadow-cyan-500 p-1'
                       rows="7"
                       cols="40"
                       placeholder='Type your message here....'
                
                /> 
                <div className='rounded-md shadow-md shadow-blue-700 w-[120px] h-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-center pt-0.5 cursor-pointer  hover:scale-105  duration-500'>
                    <button className='text-center cursor-pointer'>Let's Talk</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;