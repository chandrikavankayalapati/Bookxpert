import React,{useState} from "react"

const Rough=()=>{
    const [copy,setCopy]=useState(false);

    const text="hello guys welcome back to my channel";

const clickHandle=async()=>{
    try {
    await navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(()=>setCopy(false),1000)
  } catch (error) {

    console.log("unable to copy")
  }
}


    return(
        <div className="flex  justify-center ">
            <div className="text-center">
                <h1>{text}</h1>
                <button onClick={clickHandle} className=" border border-amber-600 cursor-pointer bg-amber-100 ">{copy ? "Copied"  : "Copy"}</button>
            </div>
            
        </div>
    )
}

export default Rough;