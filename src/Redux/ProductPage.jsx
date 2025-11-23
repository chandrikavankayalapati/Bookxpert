import React, { useState ,useEffect} from "react";

import { addToCart } from "./Slice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";


const Url="https://fakestoreapi.com/products/";

const ProductPage=()=>{
  const [data,setData]=useState([]);
const[add,setAdd]=useState([]);
const dispatch=useDispatch();

const clickHandleAdd=(product)=>{
  dispatch(addToCart(product));
  setAdd((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAdd((prev) => prev.filter((id) => id !== product.id));
    }, 1000);

}

  const fetchApiData=async(apiUrl)=>{
    const response=await fetch(apiUrl);
    const user=await response.json();
    console.log(user);
    setData(user);
  }

  useEffect(()=>{
       fetchApiData(Url);
  },[])

      return(
            <div>
             <Navbar/>
              <div className="grid grid-cols-3 justify-items-center gap-[120px] pt-10">
              {data.map((Product)=>{
                const{id,image,title,price}=Product;
                return(
      <div key={id}>            
          <div>
              <div >
                   <img className="w-[300px] h-[300px] center" src={image} alt="unable to load the image" />
                      <div>
                   <h3 className="h-[50px] w-[300px] truncate text-center text-lg text-[#0b010e] font-bold">{title}</h3>
                <div className="flex flex-row gap-[100px]">
                   <h3>₹{price}</h3> 

                   <div className=" rounded-2xl"><button onClick={()=>clickHandleAdd({id,image,title,price})} className="w-[150px] h-[40px] bg-[Coral] cursor-pointer border-1 border-b-blue-950 text-amber-50 rounded-2xl">{add.includes(id)?"Added ✅":"Add to Cart"}</button></div>
                   
                </div>
                      </div>
              </div>
             
        </div> 
         </div>
                )
              
               
              })}
             </div>
             </div>
            
      
      )

}

export default ProductPage;
