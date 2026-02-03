import React, { createContext } from "react";


let PriceContext = React.createContext({ price: 0, discount: 0 });

function App() {
  return (
    <>
     
      <PriceContext.Provider value={{ price: 222, discount: 212 }}>
        <Price />
        <Discount />
      </PriceContext.Provider>
      
    </>
  );
}

export function Price() {
  return (
    <PriceContext.Consumer>
    
      {(data) => <h1>Actual Price: {data.price}</h1>}
    </PriceContext.Consumer>
  );
}

export function Discount() {
  return (
    <PriceContext.Consumer>
      {(data) => <h1>Discount is: {data.discount}</h1>}
    </PriceContext.Consumer>
  );
}

export default App;