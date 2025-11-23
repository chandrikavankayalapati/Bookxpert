import React,{useState,useEffect} from "react";
import axios from "axios";

const DropdownStateList = () =>{

    const [stateList,setStateList]=useState([]);

    useEffect(()=>{
        getAllStateList();
    },[])
const getAllStateList = async () => {
  try {
    const result = await axios.get("https://freeapi.miniprojectideas.com/api/youtube/GetAllState");
    console.log("API Response:", result.data); // ✅ add this
    setStateList(result.data?.data || []);
  } catch (error) {
    console.error("Error fetching states:", error);
    setStateList([]);
  }
};

    return(
        <div className="min-h-screen mx-80 my-6  ">
            <div className="md:text-center flex  flex-col gap-3 bg-green-300 font-bold rounded-lg ">
                <h1>Select the Users Based on their City</h1>
                <h3>State -- District -- City -- Users </h3>

            </div>
    <div>
        <div className="grid grid-cols-3 gap-4 mt-8 justify-items-center ">
            <div className=" flex flex-col basis-[50px]">
                <label htmlFor="" className="font-semibold text-md text-red-800">Select State</label>
                <select name="" id="" className="ring-1 rounded-3xl outline-0 my-1.5 w-[180px] ring-blue-600 shadow-sm focus:ring-emerald-500  shadow-emerald-500">
                    <option value="" className="text-md font-sans">
                        Select State
                    </option>
                    {stateList.map((item)=>{
                         const{stateId,stateName}=item;
                         return(
                            <option key={stateId} value={stateId}>{stateName}</option>
                         )
                    })}
                </select>
            </div>
             <div className="flex flex-col ">
                <label htmlFor=""  className="font-semibold text-md text-red-800">Select District</label>
                <select name="" id="" className="ring-1 rounded-3xl outline-0 my-1.5 w-[180px] ring-blue-600 shadow-sm focus:ring-emerald-500  shadow-emerald-500 ">
                    <option value="" className="text-md font-sans">
                        Select District
                    </option>
                </select>
            </div>
             <div className="flex flex-col">
                <label htmlFor=""  className="font-semibold text-md text-red-800">Select City</label>
                <select name="" id="" className="ring-1 rounded-3xl outline-0 my-1.5 w-[180px] ring-blue-600 shadow-sm focus:ring-emerald-500  shadow-emerald-500">
                    <option value="" className="text-md font-sans" >
                        Select city
                    </option>
                </select>
            </div>
            </div>
            <div className="text-center my-10">
                <button className="ring-1 rounded-lg p-1.5 ring-fuchsia-500 shadow-md shadow-fuchsia-600 hover:bg-blue-500 font-semibold font-sans">Reset</button>
            </div>
            <button className="btn btn-primary mt-3" >
  Bootstrap Button Test
</button>
                    <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
           </div>
        </div>
    )
}
export default DropdownStateList;