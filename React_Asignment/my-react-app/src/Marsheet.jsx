import React, { useEffect } from "react";
import { useState } from "react";




function App(){
   const[ math , setmath] = useState(50);
   const[ Che , setChe] = useState(60);
   const[ Phy , setPhy] = useState(70);
   const[ Tot , setTot] = useState(math+Phy+Che);

const Hendeler  =() => {
setmath(math+10);
setChe(Che+10);
setPhy(Phy+10);
setTot(math+Phy+Che);

}

useEffect(() => {
  
}, [Tot]);

    return(
        <div>
            <p> Nmae: Sushil</p>
            <p> Age: 22</p>
            <p>Total {math + Phy + Che}</p>
            <p> Math : {math}</p>
            <p> Chemistry : {Che}</p>
            <p> Physics : {Phy}</p>
            <button onClick={Hendeler}>Update</button>
            
        </div>

    )
}
export default App;