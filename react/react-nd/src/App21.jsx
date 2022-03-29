

import './App.css';
import Zuikis from './Components/Zuikis';
import Zuikis2 from './Components/Zuikis2';
import Zuikis3 from './Components/Zuikis3';
import Zuikis4 from './Components/Zuikis4';
import Zuikis5 from './Components/Zuikis5';



function App(text, color, text1, text2, colors) {
  return (
    <div className="App">
     
    <div>2.1 Uzdavinys</div>
    <Zuikis></Zuikis>
    <Zuikis2 text= 'Sveiki !'> </Zuikis2>
    <Zuikis3 color={1} ></Zuikis3>
    <Zuikis3 color={2} ></Zuikis3>
    <Zuikis4 text1='Zuikiu' text2='pulkas'></Zuikis4>
    <Zuikis5 colors='green' text1='Zuikiu' text2='pulkas'></Zuikis5>
    
    

    </div>
  );
}

export default App;
