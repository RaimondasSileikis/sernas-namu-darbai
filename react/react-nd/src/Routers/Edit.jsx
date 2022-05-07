import { useParams } from "react-router-dom";

import {data} from '../App';
export default function Edit(){



    const params = useParams();
    const {id, name} = useParams();
    console.log(params, id, name);

    return(
        <>
        {
        data.map(a => id ===a.id ? 
             <h2 style={{color:'white', backgroundColor:'crimson'}} >{a.n}</h2> : null)


        }
        </>
       

        
    )
}