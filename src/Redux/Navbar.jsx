import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";


const Navbar=()=>{
    return(
<div className="flex flex-row justify-between pt-3 text-lg bg-amber-100">
        <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-blue-900 to-yellow-500 text-transparent bg-clip-text">F@shation</h1>
        </div>
        <div className="">
                <ul className="flex flex-row justify-between gap-20 cursor-pointer text-xl   ">
                    <li className="hover:bg-amber-400 rounded-xl font-bold cursor-pointer border-2 border-blue-200 shadow-2xl w-[90px] text-center">Home</li>
                    <li  className="hover:bg-amber-400 rounded-xl font-bold cursor-pointer border-2 border-blue-200 shadow-2xl w-[90px] text-center">Products</li>
                    <li  className="hover:bg-amber-400 rounded-xl font-bold cursor-pointer border-2 border-blue-200 shadow-2xl w-[90px] text-center">Contact</li>
                    <li  className="hover:bg-amber-400 rounded-xl font-bold cursor-pointer border-2 border-blue-200 shadow-2xl w-[90px] text-center">Help</li>
                </ul>
        </div>
       <div className="relative border-2 border-red-400 rounded-xl bg-yellow-50">
  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  <input
    type="search"
    placeholder="Search for Collections"
    className="outline-none border border-gray-300 rounded-md pl-10 py-1 w-full
               focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
  />
</div>

        <div className="flex flex-row">
            <p className="flex flex-row justify-around gap-4 ">  <FaShoppingCart className="text-xl text-gray-700"/>CartItems</p>
        </div>
</div>
    )
}

export default Navbar;