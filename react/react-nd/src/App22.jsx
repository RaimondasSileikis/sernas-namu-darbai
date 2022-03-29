/*
REACT CLASS STATE




1. Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

2. Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

3. Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

4. Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.

5. Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina

*/


import './App.css';
import Button1 from './Components/Button1';
import Button2 from './Components/Button2';
import Button3 from './Components/Button3';
import Button4 from './Components/Button4';
import Button5 from './Components/Button5';


function App() {
  return (
    <div className="App">
    <h3>No. 1</h3>
    <Button1 size="100px"></Button1>
    <h3>No. 2</h3>
    <Button2 size="100px"></Button2>
    <h3>No. 3</h3>
    <Button3 size="100px"></Button3>
    <h3>No. 4</h3>
    <Button4></Button4>
    <h3>No. 5</h3>
    <Button5 size="100px"></Button5>
    
    </div>
  );
}

export default App;
