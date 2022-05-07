

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Alabama from './Routers/Alabama';
import Barsukai from './Routers/Barsukai';
import Bebrai from './Routers/Bebrai';
import Edit from './Routers/Edit';

import Office1 from './Routers/Office1';

export const data = [
        {n: 'barsukas', id: 5},
        {n: 'bebras', id: 9},
        {n: 'krokodilas', id: 15},
        {n: 'vilkas', id: 775},
        {n: 'zuikis', id: 29}
        ]
        
    
       
     
function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <h1>ROUTER</h1>
      <Link to="/back-office" className='super' >Back Office</Link>
      <Link to="/sweet-home"className='super'  >Alabama</Link>

      <Link to="/bebrai"  >Bebrai</Link>
      <Link to="/barsukai" >Barsukai</Link>
    <div>----------------------------------</div>
    {
      data.map(a => <Link key={a.id} to={'/edit/' + a.id + '/' + a.n} >{a.n}</Link>)
    }
      
    <Routes>
    <Route path="/" element={<div>Hello</div>} ></Route>
      <Route path="/back-office" element={<Office1></Office1>} ></Route>
      <Route path="/sweet-home" element={<Alabama></Alabama>} ></Route>
      

      <Route path="/bebrai" elemen={<Bebrai></Bebrai>}  ></Route>
      <Route path="/barsukai" element={<Barsukai></Barsukai>} ></Route>

      <Route path="/edit/:id/:name" element={<Edit></Edit>} ></Route>

      <Route path="*" element={<div>404 not found</div>} ></Route>
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;