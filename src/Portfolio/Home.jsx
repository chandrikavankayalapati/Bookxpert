import React from 'react';
import { IoMdArrowForward } from "react-icons/io";
import Chandrika from "../assets/Chandrika.jpeg"
import {Link} from "react-scroll"


const Home = () => {
  return (
    <div id="Home" className='h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 text-xl text-gray-400 '>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-between items-center h-full md:flex-row  '>
                <div className=' flex flex-col w-full  justify-center h-full pl-6 md:ml-0 '>

                <h1 className='text-4xl text-white sm:text-5xl md:text-7xl font-bold mb-6 mt-24 md:mt-0 '>I am a React js Developer</h1>
            
            <p className='sm:text-lg text-base mb-6 mr-4 md:mr-0 w-[450px] md:w-[600px] '>
              I'm passionate React.js Developer with 3+ years of experience crafting responsive, user-friendly web applications. I love turning ideas into interactive, scalable frontends using modern tools like React, Tailwind CSS, and JavaScript.
               
            </p>
            <div className='flex justify-center md:justify-between'>
            <Link to="Portfolio" smooth duration={500} className=' group text-white bg-gradient-to-r to-blue-500 from-cyan-500 flex flex-row px-6 py-3 my-2 items-center cursor-pointer rounded-md'>
                Portfolio 
                <span className='group-hover:rotate-90 duration-5'><IoMdArrowForward className='ml-2'/></span>
            </Link>
            </div>
                </div>
            <div className='flex justify-center group '>
          <img className='w-[200px] md:w-full rounded-md ' src={Chandrika} alt="Chandrika" />
            <span class="absolute top-0 left-0 w-0 h-[2.5px] bg-fuchsia-400 scale duration-500 group-hover:w-full"></span>
  <span class="absolute top-0 right-0 w-[2.5px] h-0 bg-cyan-400 scale duration-500 delay-150 group-hover:h-full"></span>
  <span class="absolute bottom-0 right-0 w-0 h-[2.5px] bg-green-400 scale duration-500 delay-300 group-hover:w-full"></span>
  <span class="absolute bottom-0 left-0 w-[2.5px] h-0 bg-amber-400 scale duration-500 delay-500 group-hover:h-full"></span>
        </div>
        
        
        </div>

    </div>
  )
}

export default Home;