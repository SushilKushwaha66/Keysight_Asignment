import React from "react";

let NumberContext = React.createContext(2000);

 function App(){
    return (
        <>
        <NumberContext.Provider value = {45} >
         <Display />
         <Cart/>
        </NumberContext.Provider>
         <Cart/>
         </>
    )


 }
 function Display() {
  return (
    <NumberContext.Consumer>
      {(value) => <div>This value coming from Parent comp is {value}</div>}
    </NumberContext.Consumer>
  );
}
 function Cart() {
  return (
    <NumberContext.Consumer>
      {(value) => <div>The price in cart comp is {value}</div>}
    </NumberContext.Consumer>
  );
}
 export default App;