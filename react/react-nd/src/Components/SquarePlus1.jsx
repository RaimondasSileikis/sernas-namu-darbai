//Padaryti komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, dar paspaudus dar atsirastų ir t.t. DONE!

import { useState } from "react";
import SquarePlusInside from "./SquarePlusInside";

function SquarePlus1() {

 const [btn, setBtn] = useState([]);

const plusbtn = () => {
    setBtn(items => [...items, items])
}


    return (
        <>
        <div> <button onClick={plusbtn}>Prideti</button> </div>
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start', padding:'10px'}} >
        
        {
            btn.map((n, i) => 
                <div className="SQUARE1" style={{background: 'black', color:'white' }} key={i} ><SquarePlusInside> </SquarePlusInside> </div>
            )
        }
   
        </div>

        </>
    )
}
export default SquarePlus1;