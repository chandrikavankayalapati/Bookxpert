import React, { useEffect, useRef, useState } from "react";
import InputFocus from "./InputFocus";

const Dropdown=()=>{

   const[open,setOpen]=useState(false);
   const[selected,setSelected]=useState("");
   const ref=useRef(null);


   useEffect(()=>{

    const refExample=(event)=>{
        if(ref.current && !ref.current.contains(event.target)){
         setOpen(false)

    }
    }
    document.addEventListener("mousedown",refExample);

    return ()=>{
        document.removeEventListener("mousedown",refExample)
    }
       
   },[])
    

    return(
<div ref={ref}>
   <div className="grid justify-center mt-36">
        <div onClick={()=>setOpen((prev)=>!prev)} className="border-2 border-blue-200 bg-amber-100 w-[200px] text-center rounded-2xl flex justify-around">
            <button className="font-bold text-lg">Dropdown</button>
            <span >🡇</span>
        </div>

        <div className="grid justify-center mt-1 bg-gray-300 ">
            {open&&     
            <ul className="cursor-pointer grid gap-4  justify-center text-center items-center">
                <li onClick={()=>setSelected("Option-1")} className="hover:bg-gray-100 hover:w-[200px] hover:grid hover:justify-center hover:h-[40px]">Option-1</li>
                <li className="hover:bg-gray-100 hover:w-[200px] hover:grid hover:justify-center hover:h-[40px]">Option-2</li>
                <li className="hover:bg-gray-100 hover:w-[200px] hover:grid hover:justify-center hover:h-[40px]">Option-3</li>
                <li className="hover:bg-gray-100 hover:w-[200px] hover:grid hover:justify-center hover:h-[40px]">Option-4</li>
            </ul>
            }
        
        </div>

        {selected==="Option-1" && <InputFocus/>}

     </div>
</div>
       

    )
}


export default Dropdown;