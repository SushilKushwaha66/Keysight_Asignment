import React from "react";

class Music extends React.Component{

    constructor(props){   
        super(props);
        this.state = {
            instrument : "Guitar"
        }
    }

   

    componentDidMount(){     
        setTimeout(() => {
            this.setState({instrument: "Piano"})
        }, 3000)       
    }

    render(){       
        return(
            <div>
                <h2> I know how to play this {this.state.instrument} instrument </h2>
            </div>
        )
    }
}

export default Music;   