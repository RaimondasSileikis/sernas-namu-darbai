/*
1. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.
2. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.
3. Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius trikampiuose (trikampio css pasigooglint).
4. Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).
5. Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.
*/


import './App.css';
import Dog1 from './Components/Dog1';
import Dog2 from './Components/Dog2';
import Dog3 from './Components/Dog3';
import Dog4 from './Components/Dog4';
import Dog5 from './Components/Dog5';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
  return (
    <div className="App">
    <div>3.1 Uzdavinys</div>
    <div>No. 1</div>
    <Dog1 dogs={dogs} ></Dog1>
    <div>No. 2</div>
    <Dog2 dogs={dogs} ></Dog2>
    <div>No. 3</div>
    <Dog3 dogs={dogs} ></Dog3>
    <div>No. 4</div>
    <Dog4 dogs={dogs} ></Dog4>
    <div>No. 5</div>
    <Dog5 dogs={dogs} ></Dog5>

    </div>
  );
}

export default App;
