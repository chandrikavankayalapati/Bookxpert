import React, { useState } from "react";
import cloud from './assets/cloud.png';


const WeatherApp=()=>{

    const[city,setCity]=useState("");
    const[result,setResult]=useState("");


  const clickHandle=(e)=>{
       setCity(e.target.value);
    }

    const handleSubmit=async(e)=>{
         e.preventDefault(); 
         const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`;

         
         if(!city) return;

         try {
            let response = await fetch(url);
            let data=await response.json();
            console.log(data)
            let kelvin=data.main.temp;
            console.log(kelvin);
            let celcius=kelvin-273.15;
            console.log(celcius);
            let weather=data.weather[0].main;
            let description=data.weather[0].description;
            let humidy=data.main.humidy;
            let emoji="";

            if(weather==="clear")  emoji = "☀️ Sunny";
               else if (weather === "Clouds") emoji = "☁️ Cloudy";
      else if (weather === "Rain") emoji = "🌧️ Rainy";
      else if (weather === "Snow") emoji = "❄️ Snowy";
      else if (weather === "Thunderstorm") emoji = "⛈️ Thunderstorm";
      else if (weather === "Drizzle") emoji = "🌦️ Drizzle";
      else emoji = "🌡️ Weather";



            console.log(Math.round(celcius));
            
            setResult(emoji+"\n"+description+"\n"+"Temperature at"+" "+city+"\n"+Math.round(celcius)+"°C")

            
         } catch (error) {
            console.log("unable to fetch api request")
            setResult("Not Found")
            
         }
         setCity("");
    }



    return(
        <div >
            <div className="mt-[200px] flex  flex-col border w-[400px] mx-auto min-h-[300px] rounded-2xl shadow-2xl bg-[#9370DB] ">
                
                <div className="text-center">
                    <div className="flex mt-1  justify-center gap-3">
                    <h1 className=" text-3xl mt-4 text-white">Weather App</h1>
                    <img className="w-[150px] h-auto" src={cloud} alt="" />
                    </div>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <input type="text" size={20} placeholder="Enter Location " value={city} onChange={clickHandle} className="border-2 border-blue-800 rounded-lg bg-[#F0FFFF] focus:outline-none focus:border-yellow-600 "/>
                        <br/><br/>
                        <button className=" bg-[#a90d75] rounded-md text-lg text-white shadow-2xl cursor-pointer border-2 border-blue-500 hover:bg-blue-600 hover:text-xl" type="submit">Get Temparature</button>
                    </form>
                </div><br/>

                <div className="text-center text-lg mb-4">
                    {result.split("\n").map((line,index)=>{
                        return(
                            <div>
                                 {index === 3 ? <strong>{line}</strong> :
                                 index === 0 ? <div className="text-[30px]">{line}</div> :
                                  index===1? <div className="text-lg text-[#AFEEEE]">{line}</div> :line}
                            </div>
                        )
                    })}
                </div>
               
            </div>
        </div>
    )

}

export default WeatherApp;
