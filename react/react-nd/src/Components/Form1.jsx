
import Rand from "./Rand";
import { useEffect, useState } from "react";


function Form1(){


    const [number1, setNumber1] = useState('');

    const changeNumber1 = e => {
         setNumber1(e.target.value)
    }
const [square1, setSquare1] = useState([]);




  const addSquare1 = () => {
      
      setSquare1(items => [...items, Rand(100, 200)].slice(0, number1))
  }

 
  useEffect(()=>{
    const data1 = localStorage.getItem('data1')
    if(data1){
      setNumber1(JSON.parse(data1))
     }
},[])
    
    useEffect(()=>{
    localStorage.setItem('data1',JSON.stringify(number1))
    })


return(
<>

<input type="number"  onChange={changeNumber1} />
<button onClick={addSquare1} >Button</button>


<div style={{ gap:'10px',display:'flex',justifyContent:'flex-start', padding:'10px'}} >
{ 
         square1.map((n, i) => <div className="SQUARE1"  key={i} >{n}</div>)
         
        }

</div>

</>


)

}






export default Form1;