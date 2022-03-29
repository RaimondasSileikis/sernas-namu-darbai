import DogHomeCircle from "./DogHomeCircle";

function Dog2 ({dogs}) {
   

   
    return(
        <div style={{ gap:'10px',display:'flex',justifyContent:'flex-start'}} >
             {
         (dogs.sort((a,b)=> b.length - a.length)).map((obj, i) => <DogHomeCircle key={i} dog={obj} number={i + 1 + '.'} ></DogHomeCircle>)

             }
        </div>

    )
}

export default Dog2; 