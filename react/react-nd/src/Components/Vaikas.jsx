import { useContext } from "react"
import SenelioZinios from "../Contexts/SenelioZinios"
import SenelioZinios2 from "../Contexts/SenelioZinios2"
export default function Vaikas() {

const kaSakeSenelis = useContext(SenelioZinios)

    return(
        <div className="SQUARE50" >
        <h6>Vaikas &rarr;  {kaSakeSenelis}</h6>
        <SenelioZinios2.Consumer>
        
        {
        value =>{
            return (
                <h6>Vaikas2 &rarr;  {value}</h6>

            )
         
        
        }

        }
        </SenelioZinios2.Consumer>

        </div>
        
    )
}