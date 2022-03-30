//Padaryti komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, dar paspaudus dar atsirastų ir t.t. DONE!

import { useState } from "react";

function SquarePlus() {

 const [sq, setSq] = useState([]);

const add = () => {
    setSq(items => [items]);

     
const [btn, setBtn] = useState([]);

const plusbtn = () => {
    setBtn(items => [...items, ])
}

}



    return (
        <>
        <button onClick={add}>PRIDETI</button>
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start', padding:'10px'}} >
        
        {
            sq.map((n, i) => <div className="SQUARE1" key={i} ><button >+{i}</button></div>)
            
        }

        </div>
        
        </>
    )
}
export default SquarePlus;