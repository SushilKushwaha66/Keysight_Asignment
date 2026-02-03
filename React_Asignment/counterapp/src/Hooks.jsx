import React, {useState, useEffect} from 'react';

function CountApp(){

    const [count, setCount] = useState(0);  // usestate hook
    const [name, setName] = useState({FirstName: "Viren", surname: "Sharma"})
    const [title] = useState("Trainer")

 useEffect(() => {
    setName({
        FirstName: "Ravi", 
      
        surname: String(Math.floor(Math.random() * 100)) 
    });
}, [count]);

    return(
        <div>
            I clicked the button {count} times
            <button onClick = { () => setCount(count + 1)}> Add </button>
            <h3> Title : {title} </h3>
            <h3> FirstNmae : {name.FirstName} </h3>
            <h3> Last Name : {name.surname} </h3>
        </div>
    )
}

export default CountApp;