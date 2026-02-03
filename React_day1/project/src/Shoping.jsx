
import React from "react";

class ShopingComp extends React.Component {
    render (){

        return(
            <>
            <h1> Shopping Content
            </h1>
            <Product name = "SUshil"  price = "100" brand = "Titan" />
        </>
        )
    }
    
}


class Product extends React.Component {
    render (){
        return (

        <h1>{this.props.name}</h1>
        )
    }
}

export default ShopingComp;

