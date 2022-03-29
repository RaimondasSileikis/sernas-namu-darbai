import { Component } from "react";

import '../App.css';

class Button2 extends Component {

constructor(props) {
    super();
   
    this.state = { data: {radius: '50%', number: 100 } } 
    
}
rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

changeNumber() {
    if (this.state.data.number === 100) {
        this.setState({data:{number: this.rand(5, 25), radius: this.state.data.radius}})
    } else {
        this.setState({data:{number: 100}, radius: this.state.data.radius})
    }
}


changeRadius() {
    if (this.state.data.radius === '50%') {
        this.setState({data:{radius: '0', number: this.state.data.number}})
    } else {
        this.setState({data:{radius: '50%', number: this.state.data.number}});
}

}
    render() {
        return(
    <>
        <div style={{
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.state.data.radius,
            background: 'purple',
            display: 'grid'
            }}>
            <h2 style={{
                display: 'grid',
                alignContent: 'center',
                justifyContent: 'center'
            }} >{this.state.data.number}
            </h2> 
            
        </div>
        <button onClick={()=>this.changeRadius()} >Change</button>
        <button onClick={()=>this.changeNumber()} >Random</button>
    </>
        )
    }
}
export default Button2;