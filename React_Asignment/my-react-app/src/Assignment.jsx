import React, { useEffect } from "react";
import { useState } from "react";



 


function App(){

    const[old  , setold] = useState("Drums");
    const[New ,setNew] = useState(" ");

    const Handel = () =>{

   setNew("Voilen");

   
}


    return(
         <div>
        <h3>0ld Instrument {old}</h3>
        <h3> New Instrument {New}</h3>
        <button  onClick={Handel}>  Show</button>
       </div>

       


    )
}

export default App;
