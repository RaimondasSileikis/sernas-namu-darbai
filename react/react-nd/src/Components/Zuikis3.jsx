

function Zuikis3({color}) {
const getColor = color => (color === 1) ? 'blue' : 'red';

    return(
        <div >

            <h1 style={{
                color: getColor(color)
                }} >Zebrai ir Bebrai</h1>
            
        </div>

    )
}

export default Zuikis3; 