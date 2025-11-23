import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
 
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"
import CHANDRIKAE3 from "../assets/CHANDRIKAE3.pdf"



const SocialLinks=()=>{

    const Links=[
        {
            id:0,
            child:(
                <>
                LinkedIn <FaLinkedin/>
                </>
            ),
            href:"https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F",
            style:'rounded-tr-md'
        },
            {
            id:1,
            child:(
                <>
                GitHub <FaGithub/>
                </>
            ),
            href:"https://github.com/chandrikavankayalapati/Chandrika/edit/main/README.md",
           
        },
            {
            id:2,
            child:(
                <>
                E-Mail <HiOutlineMail />
                </>
            ),
            href:"https://mail.google.com/mail/u/0/#inbox?compose=new",
            
        },
            {
            id:3,
            child:(
                <>
                Resume <BsFillPersonLinesFill/>
                </>
            ),
            href:CHANDRIKAE3,
            style:'rounded-br-md',
            download:true,
        },



    ]
    return(
        <div className=' flex-col absolute  top-[35%] left-0 hidden  md:flex'>
             <ul>
              {Links.map(({id,child,href,style,download})=>{
                return(
                      <li key={id} className={'bg-gray-300 w-[120px] h-8 flex  justify-between ml-[-90px] hover:ml-0 duration-150  px-1 hover:rounded-r-md' + " " + style}>
                 <a 
                    href={href}
                   className='flex  justify-between items-center text-lg w-full size-8'
                   target="_blank"
                   download={download}
                   rel="noreferrer"
                   > 
                    {child}
                 </a>
                </li>
                )
              })}
             </ul>
        </div>
    )
}

export default SocialLinks;