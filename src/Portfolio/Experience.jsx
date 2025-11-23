import React from 'react'
import HtmlSkill from "../assets/HtmlSkill.png"
import CssSkill from "../assets/CssSkill.png"
import JavascriptSkill from "../assets/JavascriptSkill.png"
import TailwindcssSkill from "../assets/TailwindCssSkill.png"
import ReactSkill from "../assets/ReactSkill.png"
import SQLSkill from "../assets/SQLSkill.png"

const Experience = () => {

  const Skills=[
     {
      id:0,
      src:HtmlSkill,
      title:"Html",
      style:"shadow-orange-600"
    },
    {
      id:1,
      src:CssSkill,
      title:"CSS",
      style:"shadow-blue-600"
    },
    
     {
      id:2,
      src:TailwindcssSkill,
      title:"TAILWINDCSS",
      style:"shadow-white"
    },
     {
      id:3,
      src:JavascriptSkill,
      title:"JAVASCRIPT",
      style:"shadow-yellow-600"
    },
     {
      id:4,
      src:ReactSkill,
      title:"REACT",
      style:"shadow-green-600"
    },
      {
      id:5,
      src:SQLSkill,
      title:"PL/SQL",
      style:"shadow-red-600"
    },

  ]
  return (
    <div id="Experience" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white '>
      <div className='max-w-screen-lg mx-auto pt-24  flex flex-col justify-center w-full h-full py-12  '>
      
             <div className=' '>
          <h1 className='relative text-4xl font-bold p-2 group cursor-pointer w-fit'>Experience
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-500 group-hover:w-full scale-105 transition-all duration-500"></span>
          </h1>
          <p className='pt-4 text-gray-400 text-xl'>These are the technologies I have worked with</p>
             </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-20 py-24 px-12 sm:px-0 justify-center  scroll '>

          {Skills.map(({id,src,title,style})=>{
               return (
                       <div key={id} className={`shadow-md scroll rounded-md hover:scale-105 transition-transform  duration-500 ${style}`}>
          <img  className=' mx-auto w-20' src={src} alt="unable to load" />
          <p className='text-sm md:text-lg font-bold text-center pt-4'>{title}</p>
             </div>
               )
          })}
        
             
           </div>
        </div>
    </div>
                  
  )
}

export default Experience;