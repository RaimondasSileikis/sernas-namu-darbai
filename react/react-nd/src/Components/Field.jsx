
import { Component } from "react";
import Tree1 from "./Tree1";

class Field extends Component{

    constructor(props) {
        super();
        this.state = {elements: []};
    }

    add(a){
        const elementsCopy = [...this.state.elements];
        // elementsCopy.push(Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0'));
        elementsCopy.push(a);
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
            <div>
                <button onClick={()=>this.add('ąžuolas')}>ąžuolas</button>
                <button onClick={()=>this.add('beržas')}>beržas</button>
                <button onClick={()=>this.add('uosis')}>uosis</button>
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
                <Tree1 elements={this.state.elements}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '200px',
                        height: '400px',
                        border: '1px solid black'
                }}>
                <Tree1 elements={this.state.elements}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '200px',
                        height: '400px',
                        border: '1px solid black'
                }}>
                <Tree1 elements={this.state.elements}/>
                    </div>
            </div>
           
            </>
        )
    }

}

export default Field;