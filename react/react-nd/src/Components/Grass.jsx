import { useEffect, useState } from "react"
import rand from "../Common/rand"
import Cow from "./Cow"
import Sheep from "./Sheep"

function Grass({sheep, cow}){

   
    

    return (

        <div className="SQUARE800" >

            <div style={{ width: '50%', height:'100%',border:'1px solid black'}} >
                <h3>Avys</h3>
                {
                    sheep.map((n,i) => <Sheep key={i} ></Sheep>)
                }

            </div>

            <div style={{ width: '50%', height:'100%',border:'1px solid black'}} >
                <h3>Karves</h3>
                {
                    cow.map((n,i) => <Cow key={i} ></Cow>)
                }

            </div>


        </div>

    )

    
}

export default Grass