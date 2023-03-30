import React, { Component } from 'react'

export class CountComp extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            num : 0
        }
    }

    render(){
        const {num} = this.state;

        return(
            <div>
                <h1>{num}</h1>
                <button onClick={()=>{this.setState({num:num+10})}}>+10</button>
            </div>
        )
    }
}
export default CountComp;