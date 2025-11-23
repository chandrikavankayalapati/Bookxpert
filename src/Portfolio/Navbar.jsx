import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

const Navbar = () => {

    const[nav,setNav]=useState(false);


    const links=[
        {
            id:1,
            link:"Home"
        },
         {
            id:2,
            link:"About"
        },
         {
            id:3,
            link:"Portfolio"
        },
          {
            id:4,
            link:"Experience"
        },
         {
            id:5,
            link:"Contact"
        },
        
    ]


  return (
    <div className='bg-black h-20 flex justify-between text-gray-500 px-4 fixed w-full items-center'>
        <div>
            <h1 className='text-5xl font-extralight text-white '>Chandrika</h1>
        </div>

         <ul className='text-xl hidden md:flex'>
                 {links.map(({id,link})=>{
                    return(
                        <li key={id} className='mx-5 cursor-pointer hover:scale-105 duration-100'><Link to={link} smooth duration={500}>{link}</Link></li>
                    )
                   
                 })}
         </ul>
             
                  <div onClick={()=>setNav(!nav)} className='text-xl z-10 cursor-pointer md:hidden'>
                   {nav ? <FaTimes/>:<FaBars/>}
                 </div>

                 {nav &&    <ul className='flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                   {links.map(({link,id})=>{
                    return(
                        <li className='cursor-pointer text-3xl px-4 py-6 hover:scale-105 duration-100' key={id} >
                          <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                          </li>
                    )
                   })}

                 </ul> }

                
             
           

    </div>
  )
}

export default Navbar;