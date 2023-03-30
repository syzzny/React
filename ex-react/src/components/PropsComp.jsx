import React, {Component} from "react";

export class PropsComp extends Component{

    render(){
        const {color,children} = this.props
        const {name} = this.props;
        return(
            <div style={{color:color}}>
                <h1>{name?name : "냥!"}</h1>
            </div>
        )
    }
}
export default PropsComp;