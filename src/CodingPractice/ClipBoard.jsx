import React, { useState } from "react";

const ClipBoard=()=>{
    const[copied,setCopied]=useState(false);

    const text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      

    const clickHandle=async()=>{
        try{
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(()=>setCopied(false),1000);

        }catch(error){
            console.log("failed to copy the text")

        }
    }
    
    
    return(
        <div className="flex justify-center">
            <div className="mx-auto">
            <h3 className="w-[500px] min-h-[200px] mt-5">{text}</h3>
        <div className="flex justify-center"> 
             <button onClick={clickHandle} className="border-2 border-amber-900 rounded-sm mt-4 mx-auto cursor-pointer">{copied?"copied!":"Copy"}</button>
             </div>
        </div>
        </div>
        
    )

}

export default ClipBoard;