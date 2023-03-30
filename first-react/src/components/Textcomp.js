import { Children, Component } from "react";
class TextComp extends Component{
    render(){
        const {name,children} = this.props;

        return(
            <div>
                <h2>{name}</h2>
                <p>{children}</p>
            </div>
        )
    }
}

export default TextComp;