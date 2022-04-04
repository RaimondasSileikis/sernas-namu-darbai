
import Rand from "./Rand";
import { useEffect, useState } from "react";


function Form2(){

  const [name, setName] =useState('')
  const [weight, setWeight] = useState('');
  const [cat, setCat] = useState([]);

  const addCat = (e) => {
    e.preventDefault();
    setCat([...cat, {name:name, weight:weight}].sort((a,b) => {return a.weight - b.weight}))
    setName('')
    setWeight('')
  };



 
  useEffect(()=>{
    const data2 = localStorage.getItem('data2')
    if(data2){
      setCat(JSON.parse(data2))
     }
},[])
    
    useEffect(()=>{
    localStorage.setItem('data2',JSON.stringify(cat))
    })


return(
<>

<form  onSubmit={addCat}>
<input type="name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
<input type="number" name='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
<input type="submit" />
</form>

<div style={{ gap:'10px',display:'flex',flexDirection:'column', justifyContent:'flex-start', padding:'10px'}} >
{ 
         cat.map((n, i) => <div  key={i} >{n.name} {n.weight}</div>)
         
        }

</div>

</>


)

}






export default Form2;