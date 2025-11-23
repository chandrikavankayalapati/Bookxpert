import React,{useState,useEffect} from "react";

const Newsboard =()=>{
    const[articles,setArticle]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState({status:false, error:""})

    const fetchApi= async()=>{
        try {
            setLoading(true);
            setError({status:false});
            let url=`https://newsdata.io/api/1/latest?apikey=pub_c9d7fab9ef5246178a154a80734c7fd5`
              const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        setArticle(data.results);
        setLoading(false);
        setError({status:false});

        if(response.status==404){
            throw new error("data not found");
        }

            
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            setError({status:true, msg:error.message || "something went wrong try again later"})
            
        }
      
       
    }

    // if(loading){
    //     return(
    //         <div className="text-center m-5">Loading....</div>
    //     )
    // }


    //  if(error?.msg){ 
    //     return(
    //         <div>
    //             <h3 style={{color:"red"}}>{error?.msg}</h3>
    //         </div>
    //     )
    //    }



    useEffect(()=>{
        fetchApi();
    },[])

    return(
       <div>
        <div className="mt-4.5">
         <h4 className="text-center ">Latest <span className="text-white bg-red-700 rounded  shadow shadow-orange-700 ">News</span></h4>
       </div>
       {articles.map((item)=>{
        const{source_id, source_name, country,sentiment,link,source_url}=item;
        return(
          
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        )
       })}
       </div>
    )
}

export default Newsboard;