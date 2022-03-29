import { Component } from "react";
import Square from "./Square";

class Button5 extends Component{

    constructor(props) {
        super();
        this.state = {elements: []};
    }

    add(color){
        const elementsCopy = [...this.state.elements];
        // elementsCopy.push(Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0'));
        elementsCopy.push(color);
        this.setState({
            elements: elementsCopy
          });
    }

    reset = () => {
            this.setState({
            elements: []
          });
    }

    render(){
        return (
            <>
            <button onClick={()=>this.add('blue')}>Ad Blue</button>
            <button onClick={()=>this.add('red')}>Ad Red</button>
            <button onClick={this.reset}>Reset</button>
            <Square elements={this.state.elements}/>
            </>
        )
    }

}

export default Button5;