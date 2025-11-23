import React,{useId} from 'react'

const Useid = () => {

    const id=useId(); 
  return (
    <div>
      <label htmlFor={id}>Username:</label>
      <input id={id} type="text" className='border-2 border-red-90033' />
    </div>
  )
}

export default Useid