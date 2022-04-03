//Padaryti komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, dar paspaudus dar atsirastų ir t.t. DONE!


import { useState } from "react";

function SquareGreen1() {

 const [azuolas, setAzuolas] = useState([]);
 const [berzas, setBerzas] = useState([]);
 const [uosis, setUosis] = useState([]);

 const addAzuolas = () => {
     setAzuolas(items => [...items, 'Azuolas'])
 };
 const addBerzas = () => {
     setBerzas(items =>[...items, 'Berzas'])
 };
 const addUosis = () => {
     setUosis(items =>[...items, 'Uosis'])
 };





    return (
        <>
         <div>
             <button style={{marginTop:'-30px'}} onClick={addAzuolas} >Azuolas</button>
             <button style={{marginTop:'-30px'}} onClick={addBerzas} >Berzas</button>
             <button style={{marginTop:'-30px'}} onClick={addUosis} >Uosis</button>
         </div>
        <div style={{display: 'flex', width: '450px',height: '500px',marginTop:'30px', background: 'green', borderTop:'none', border: '1px solid black'}}>

           <div>

               
           </div>
           <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', width: '33.33%', alignItems: 'center', gap:'10px'}}  >
                {
                    azuolas.map((t, i) =>  <div key={i} className='SQUARE1' >{t}</div>)
                }
            </div>

            <div style={{display: 'flex',flexDirection: 'column', border: '1px solid black', width: '33.33%', alignItems: 'center',gap:'10px' }} >
                {
                    berzas.map((t, i) =>  <div key={i} className='SQUARE1' >{t}</div>)
                }
            </div>
            <div style={{display: 'flex',flexDirection: 'column',border: '1px solid black', width: '33.33%', alignItems: 'center',gap:'10px' }} >
                {
                    uosis.map((t, i) => <div key={i} className='SQUARE1' >{t}</div> )
                }
            </div>
        </div>
        </>
    )
}
export default SquareGreen1;