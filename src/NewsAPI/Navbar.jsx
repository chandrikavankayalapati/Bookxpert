
const Navbar=()=>{
    return (
               <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <div className="font-bold text-2xl font-sans ">News <span className="text-blue-800">Mag</span></div>
    <div className="hidden sm:flex w-[30%] justify-between text-lg">
       <div className=" min-w-[70px] text-center  transition-all duration-75  hover:bg-blue-200 hover:scale-105 cursor-pointer rounded">Home</div>
    <div className=" min-w-[70px] text-center  transition-all duration-75  hover:bg-blue-200 hover:scale-105 cursor-pointer rounded">Features</div>
    <div className=" min-w-[70px] text-center  transition-all duration-75  hover:bg-blue-200 hover:scale-105 cursor-pointer rounded">Pricing</div>
    <div className=" min-w-[70px] text-center  transition-all duration-75  hover:bg-blue-200 hover:scale-105 cursor-pointer rounded">Disabled</div>
    </div>
   
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    )        
}

export default Navbar;