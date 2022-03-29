import { Component } from "react";

import '../App.css';

class Button3 extends Component {

constructor(props) {
    super();
   
    this.state = {radius: '50%'}; // pradines steito reiksmes
    this.state = {number: 0}
}

changePlus() {
    this.setState({number: this.state.number + 1 })
}

changeMinus() {
    this.setState({number: this.state.number - 3 })
}
    render() {
        return(
    <>
        <div style={{
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.state.radius,
            background: 'transparent',
            display: 'grid'
            }}>
            <h2 style={{
                display: 'grid',
                alignContent: 'center',
                justifyContent: 'center'
            }} >{this.state.number}
            </h2> 
            
        </div>
        <button onClick={()=>this.changeMinus()} >-</button>
        <button onClick={()=>this.changePlus()} >+</button>
    </>
        )
    }
}
export default Button3;