//Padaryti komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, dar paspaudus dar atsirastų ir t.t. DONE!


import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function SquareGreen2() {

 const [tree, setTree] = useState([
     {vis: 'hidden', name: 'azuolas', className: 'SQUARE1',},
     {vis: 'hidden', name: 'berzas', className: 'SQUARE1',},
     {vis: 'hidden', name: 'uosis', className: 'SQUARE1',},
 ]);

const changeTrees = (i) => {
    const newTree = [...tree];
    newTree[i].vis = 'visible';
    newTree[i].className = 'SQUARE1';
    setTree(newTree);
}

console.log(tree);
    return (
        <>
         
        <div style={{display: 'flex', width: '450px',height: '302px',marginTop:'30px', background: 'green', borderTop:'none', border: '1px solid black'}}>
           
            {
                tree.map((t, i) => {
                    return (
                <div key={uuidv4()} style={{display: 'flex', flexDirection: 'column',alignItems: 'center', width: '150px',height: '302px',background: 'green', borderTop:'none', border: '1px solid black'}}>
                
                <button style={{marginTop:'-30px'}} onClick={() => {changeTrees(i)}} >{t.name}</button>
                
                <div style={{display:'flex', justifyContent:'flex-start', padding:'40px'}} ></div>
                <div style={{visibility: t.vis}} className={t.className} >{t.name}</div>
                </div>
                    )
                 } )
            }
        </div>
        </>
    )
}
export default SquareGreen2;