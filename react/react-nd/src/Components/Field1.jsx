import { Component } from "react";
import Tree from "./Tree";


import '../App.css';

class Field1 extends Component {

constructor(props) {
    super();
   
    this.state = {data:{vis: 'hidden', mame: ''}}; // pradines steito reiksmes
}

changeVis(name) {
        this.setState({data:{vis: 'visible', name: name}})
}

render(){
    return (
        <>
        <div>
            <button onClick={()=>this.changeVis('ąžuolas')}>ąžuolas</button>
            <button onClick={()=>this.changeVis('beržas')}>beržas</button>
            <button onClick={()=>this.changeVis('uosis')}>uosis</button>
        </div>
       
        <div style={{
             display: 'flex',
             width: '600px',
             height: '402px',
             background: 'green',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: '400px',
                    border: '1px solid black'
            }}>
            <Tree name={this.state.data.name} vis={this.state.data.vis}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: '400px',
                    border: '1px solid black'
            }}>
            <Tree name={this.state.data.name} vis={this.state.data.vis}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: '400px',
                    border: '1px solid black'
            }}>
            <Tree name={this.state.data.name} vis={this.state.data.vis}/>
                </div>
        </div>
       
        </>
    )
}
}
export default Field1;