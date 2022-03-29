
import { Component } from "react";
import Tree from "./Tree";

class Field extends Component{

    constructor(props) {
        super();
        this.state = {vis: []};
    }

    add(vis){
        const elementsCopy = [...this.state.elements];
        // elementsCopy.push(Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0'));
        elementsCopy.push(vis);
        this.setState({
            vis: elementsCopy
          });
    }

    reset = () => {
            this.setState({
            vis: []
          });
    }

    render(){
        return (
            <>
            <div>
                <button onClick={()=>this.add('visibility')}>ąžuolas</button>
                <button onClick={()=>this.add('visibility')}>beržas</button>
                <button onClick={this.reset}>uosis</button>
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
                <Tree elements={this.state.vis}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '200px',
                        height: '400px',
                        border: '1px solid black'
                }}>
                <Tree elements={this.state.vis}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '200px',
                        height: '400px',
                        border: '1px solid black'
                }}>
                <Tree elements={this.state.vis}/>
                    </div>
            </div>
           
            </>
        )
    }

}

export default Field;