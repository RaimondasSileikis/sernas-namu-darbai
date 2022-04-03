//Padaryti komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, dar paspaudus dar atsirastų ir t.t. DONE!

import { useEffect, useState } from "react";

function SquarePlusInside() {

const [count, setCount] = useState([]);

const addCount = (e) => {
    e.preventDefault();
    setCount(items => [...items, items.length])
}

useEffect(()=>{
    const data = localStorage.getItem('data')
    if(data){
      setCount(JSON.parse(data))
     }
},[])
    
    useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(count))
    },)

    return (
        <>
        <div> <button onClick={addCount}>+</button>{count.length} </div>
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start', padding:'10px'}} >
        </div>
        </>
    )
}
export default SquarePlusInside;