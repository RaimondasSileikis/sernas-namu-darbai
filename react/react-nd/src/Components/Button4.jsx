import { Component } from "react";

import '../App.css';

class Button4 extends Component {
    constructor(props) {
    super();
    this.state = {number: 0}
    this.addSquare = this.addSquare.bind(this);
}

addNumber() {
    this.setState({number: this.state.number + 1 })
}

addSquare() {
    const squores = [];
    for (let i = 0; i < this.state.number; i++) {
        squores.push(
            <div key={i} style={{
                width: '50px',
                height: '50px',
                background: 'blue',
                }}>
            </div>);
    }
    return squores;
}

    render() {
        return(
    <>
        <button onClick={()=>this.addNumber()} >Add</button>
        <div style={{
            gap: '10px',
            display: 'flex',
            justifyContent: 'flex-start'
            }}>
           {this.addSquare()}
        </div>
       
    </>
        )
    }
}
export default Button4;