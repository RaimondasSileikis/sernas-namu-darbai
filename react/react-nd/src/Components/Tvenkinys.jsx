import Daiktas from "./Daiktas";

function Tvenkinys ({sea}) {
   

   
    return(
        <div>
             {
        sea.map((obj) => <Daiktas key={obj.id} resident={obj} ></Daiktas>)

             }
        </div>

    )
}

export default Tvenkinys; 