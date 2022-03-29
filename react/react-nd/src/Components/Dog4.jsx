
import DogHomeSquare from "./DogHomeSquare";

function Dog4 ({dogs}) {
   

   
    return(
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start'}} >
             {
         dogs.map((obj, i) => obj[0] === obj[0].toLowerCase() ? (<DogHomeSquare key={i} dog={obj} ></DogHomeSquare>) : 0)

             }
        </div>

    )
}

export default Dog4; 