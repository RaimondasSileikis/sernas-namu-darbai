import ResidentBala from "./ResidentBala";

function Bala({sea}) {
    return(
        <div>
             {
        sea.map((obj) => <ResidentBala key={obj.id} resident={obj} ></ResidentBala>)

             }
        </div>

    )
}

export default Bala; 