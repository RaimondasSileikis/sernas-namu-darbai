import { useLayoutEffect } from "react";
import rand from "../Common/rand";


function Sheep () {

   

    return (
        <div className="CIRCLE" >{'A' + rand(0, 1000000)}</div>

    )
}
export default Sheep;