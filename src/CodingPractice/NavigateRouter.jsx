import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavigateRouter = () => {
  const navigate=useNavigate();

  const navigateHandle=()=>{
    navigate("/dashboard");
  }
  return (
    <div>
      <button onClick={navigateHandle}>Login</button>
    </div>
  )
}

export default NavigateRouter;

//here we must wrap the component in <BroserRouter> <NavigateRouter/><BroserRouter/>

//example of programatical navigation in react router dom

// in older version like v5 we used history but in vs6 latest version we use navigate