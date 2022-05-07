import { useReducer } from "react"


export default function Sq(){

    const [sq, dispachSq] = useReducer(Sq, [])
    return(

        <div className="SQUARE">
            {
                sq.map((sq, i)=> <div key={i} className='SQUARE50' ></div>)
            }

        </div>
    )
}