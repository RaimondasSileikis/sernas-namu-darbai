
import DogHomeSquare from "./DogHomeSquare";

function Dog5 ({dogs}) {
   

   
    return(
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start'}} >
             {
         dogs.map((obj, i) =>  <DogHomeSquare color={ obj.length > 6 ? 'green':'red' } key={i} dog={obj.length } ></DogHomeSquare>)

             }
        </div>

    )
}

export default Dog5; 