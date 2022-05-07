
import { useEffect, useReducer, useState } from 'react';
import { add1, add11, addRand, dif1, dif11, difRand, newColor,colorChange, addSquare } from './Actions/basic';
import './App.css';
import rand from './Common/rand';
import Kvadratelis from './Components/Kvadratelis';
import countReducer from './Reducers/countReducer';

//Reikia padaryt mygtuką, kurį spaudinėjant keistųsi
// kvadratuko spalvos iš kokios nors į kokią nors DONE!

function App() {

   

  const [countR, dispachR] = useReducer(countReducer, 333);
  const [random, setRandom] = useState(100);
  const [color, setColor] = useState('red');

  const [color2, dispachColor2] = useReducer(countReducer, 'yellow');

  useEffect(() => {
      setRandom(rand(10, 80));
  }, []);

  const getNewRand = (a) => {
      if ('+' === a) {
          dispachR(addRand(random));
      } else {
          dispachR(difRand(random));
      }
      setRandom(rand(10, 80));
  }

  const getNewColor = (color) =>{
    if ('red' === color) {
      dispachR(newColor(color));
    }
    setColor('green')
  }


 const [square, dispachSquare] = useReducer(countReducer, [])

  return (
    <div className="App">
      <h1>USE Reducer</h1>
      <h2>Count REDUCER NOW: {countR}</h2>
      <div  className='SQUARE500'>

      <button onClick={()=> dispachR(add1())} >+1</button>
      <button onClick={()=> dispachR(dif1())} >-1</button>
      <button onClick={()=> dispachR(add11())} >+11</button>
      <button onClick={()=> dispachR(dif11())} >-11</button>

      <button onClick={() => dispachR(addRand(random))}>+{random}</button>
      <button onClick={() => dispachR(difRand(random))}>-{random}</button>
      <button onClick={() => getNewRand('+')}>+RAND</button>
      <button onClick={() => getNewRand('-')}>-RAND</button>

      <button onClick={() => getNewColor(color)}>COLOR</button>
      <div style={{width:'50px', height:'50px', backgroundColor:color}}></div>
      
      <button onClick={() => dispachColor2(colorChange())}>COLOR2</button>
     <div className='SQUARE50' style={{background:color2}} ></div>
   
      </div>
    <h1>REDUCER</h1>

    <button onClick={() => dispachSquare(addSquare())}>ADD SQUARE</button>

    <div  className={square} ></div>

    <Kvadratelis></Kvadratelis>
   

   
     
    </div>
  );
}

export default App;