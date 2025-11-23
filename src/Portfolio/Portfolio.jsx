import React from 'react'
import ReduxToolkit from "../assets/ReduxToolkit.jpg"
import Javascript from "../assets/Javascript.png"
import Reactone from "../assets/Reactone.png"
import Weather from "../assets/Weather.png"
import Todolist from "../assets/Todolist.png"


const Portfolio = () => {

  const Portfolios=[
    {
      id:0,
      src:Weather,
      name:"Weather",
      link:"https://github.com/chandrikavankayalapati/final/blob/master/WeatherApp.jsx"
    },
    {
      id:1,
      src:Todolist,
      name:"Todolist",
      link:"https://github.com/chandrikavankayalapati/Tododlist/blob/main/first/Todolist.jsx"
    },
    {
      id:2,
      src:ReduxToolkit,
      name:"ReduxTollkit",
      link:"https://github.com/chandrikavankayalapati/final/tree/master/Redux"
    },


  ]

  const clickHandle=(link)=>{
    window.open(link,"_blank")
  }
  return (
    <div id="Portfolio" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white'>
      <div className='mx-auto px-6  pt-20 max-w-screen-lg'>
        <div className='flex flex-col  '>
          <h1 className='text-4xl font-bold border-b-4 border-gray-500  w-fit'>Portfolio</h1>
          <p className='text-lg pt-5 text-gray-400'>Check out some Of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3  pt-12 gap-8 '>

          {Portfolios.map(({id,src,name,style,link})=>{
            return(
                   <div key={id} className='flex flex-col items-center justify-center shadow-md shadow-blue-300 rounded-lg p-4'>
            <img className='scoll rounded-md w-60 md:w-full h-40 object-cover hover:scale-105 duration-500 ' src={src} alt="unable to load" />
            <div className=' flex flex-row gap-16 md:gap-28 pt-2 items-center'>
              <p className={`font-bold text-md md:text-lg ${style}`}>{name}</p>
              <button onClick={()=>clickHandle(link)} className=' bg-gray-600 rounded w-full h-8 cursor-pointer hover:scale-105 duration-500 '>Code</button>
            </div>
           </div>
            )
          })}
          
          </div>
        </div>
    
    </div>
  )
}

export default Portfolio;