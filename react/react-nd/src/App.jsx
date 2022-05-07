
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Avatar from './Components/Avatar';
import Avatar2 from './Components/Avatar2';

       
     
function App() {

console.log('GO');

const [c, setC] = useState(1);

// const abc = () => {
//   console.log('ABC');
//  } 
 const abc = useCallback(() => {
   console.log('ABC');
 },[]);

useEffect(() => {
console.log('GO EFFECT');
abc();

}, [abc])



  return (
    <div className='App' >
      <h1>The End season:{c}</h1>
    <button onClick={(() => setC(a => a + 1))} >ReRender</button>

    {/* <Avatar></Avatar> */}
    <Avatar2></Avatar2>

    </div>
);
}

export default App;