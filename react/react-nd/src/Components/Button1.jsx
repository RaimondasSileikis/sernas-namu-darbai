import { Component } from "react";

import '../App.css';

class Button1 extends Component {

constructor(props) {
    super();
   
    this.state = {radius: '50%'}; // pradines steito reiksmes
}

changeRadius() {
    if (this.state.radius === '50%') {
        this.setState({
            radius: ''})
    } else {
        this.setState({radius: '50%'});
    
}
setTimeout(() => console.log(this.state.radius), 1);
}
    render() {
        return(
    <>
        <div style={{
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.state.radius,
            background: 'green'
            
            }}>
                
        </div>

        <button onClick={()=>this.changeRadius()} >Change</button>
    </>
        )
    }
}
export default Button1;