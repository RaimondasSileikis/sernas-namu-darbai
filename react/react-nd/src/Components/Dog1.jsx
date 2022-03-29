import DogHomeSquare from "./DogHomeSquare";

function Dog1 ({dogs}) {
   

   
    return(
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start'}} >
             {
        dogs.map((obj, i) => <DogHomeSquare key={i} dog={obj} ></DogHomeSquare>)

             }
        </div>

    )
}

export default Dog1; 