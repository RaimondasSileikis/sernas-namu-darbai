
import './App.css';

import SquareGreen2 from './Components/SquareGreen2';
import SquareGreen1 from './Components/SquareGreen1';
import SquarePlus1 from './Components/SquarePlus1';
import SquarePlusInside from './Components/SquarePlusInside';
import Form1 from './Components/Form1';
import Form2 from './Components/Form2';
import Grass from './Components/Grass';
import { useEffect, useState } from 'react';
import ButtonGrass from './Components/ButtonGrass';
import rand from './Common/rand';




function App() {

  const [sheep, setSheep] = useState([]);
  const [cow, setCow] = useState([]);

  
  
  const addAnimal = () => {
      
      setCow(item2 => [...item2, item2].slice(0, rand(5, 20)))
      setSheep(item1 => [...item1, item1].slice(0, rand(5, 20)))
  }
  

  useEffect(()=>{
    const dataSheep = localStorage.getItem('dataSheep')
    const dataCow = localStorage.getItem('dataCow')
    if(dataSheep){
      setSheep(JSON.parse(dataSheep))
     }
     if(dataCow){
      setCow(JSON.parse(dataCow))
     }
},[])
    
    useEffect(()=>{
    localStorage.setItem('dataSheep',JSON.stringify(sheep))
    localStorage.setItem('dataCow',JSON.stringify(cow))
    })
  



  return (
    <div className="App">
    <h3>4.1 Homework HOOK</h3>
    <h3>No. 1</h3>
    <SquareGreen1></SquareGreen1>
    <h3>No. 1.1</h3>
    <SquareGreen2></SquareGreen2>
    <h3>No. 2</h3>
    <SquarePlus1></SquarePlus1>
    <h3>No. 3</h3>
    <SquarePlusInside></SquarePlusInside>
    <h3>5.Homework REACT FORMS</h3>
    <h3>No. 5.1</h3>
    <Form1></Form1>
    <h3>No. 5.2</h3>
    <Form2></Form2>
    
    <h3>6. Homework LIFT</h3>
    <ButtonGrass addAnimal={addAnimal} ></ButtonGrass>
    <Grass sheep={sheep} cow={cow} ></Grass>
    
    </div>
  );
}

export default App;
