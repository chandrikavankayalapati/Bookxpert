import React, { useEffect, useRef } from 'react'

const InputFocus = () => {
    const refexmp= useRef(null);

    useEffect(()=>{
        refexmp.current.focus();
    },[])

  return (
    <div>
        <form action="">
            <input className='border-2 border-amber-700 mx-3 my-3.5 focus:border-2 focus:border-blue-400 focus:outline-0'  type="text" ref={refexmp} />
        </form>
    </div>
  )
}

export default InputFocus;