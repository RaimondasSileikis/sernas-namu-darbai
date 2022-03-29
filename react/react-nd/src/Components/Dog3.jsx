import DogHomeTriangle from "./DogHomeTriangle";
import DogHomeSquare from "./DogHomeSquare";

function Dog3 ({dogs}) {
   

   
    return(
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start'}} >
             {
         dogs.map((obj, i) => i % 2 !== 0 ? (<DogHomeTriangle key={i} dog={obj} ></DogHomeTriangle>) : (<DogHomeSquare key={i} dog={obj} ></DogHomeSquare>))

             }
        </div>

    )
}

export default Dog3; 