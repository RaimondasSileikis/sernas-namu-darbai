
import { useEffect, useReducer, useState } from 'react';

import './App.css';
import Senelis from './Components/Senelis';
import SenelioZinios from './Contexts/SenelioZinios';
import SenelioZinios2 from './Contexts/SenelioZinios2';


//Reikia padaryt mygtuką, kurį spaudinėjant keistųsi
// kvadratuko spalvos iš kokios nors į kokią nors DONE!

function App() {
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(0);  

  return (
    <div className="App">
      <h1>CONTEX - - - &rarr;</h1>

      <button onClick={() => {
        setCount(c => c + 1);
        setCount2(c => c + 2);
        
        } }> GO</button>

      
      <SenelioZinios.Provider value={count} >
        <SenelioZinios2.Provider value={count2} >
          <Senelis></Senelis>
        </SenelioZinios2.Provider>
      </SenelioZinios.Provider>
     
    </div>
  );
}

export default App;