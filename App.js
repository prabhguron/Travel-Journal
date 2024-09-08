import React from "react"
import Data from "./data.js"
import Navbar from "./Components/Navbar"
import Traveled from "./Components/Traveled"
import data from "./data"
export default function App(){
    
    const travel = data.map(item => {
   
     return (   <Traveled 
        key = {item.id}
        {...item}
        />
       )
    })
   
    
    return (
        <div>
        <Navbar/>
        <section className="travelPlaces">
        {travel}
         </section>
     </div>
       
    )
    
    
}

