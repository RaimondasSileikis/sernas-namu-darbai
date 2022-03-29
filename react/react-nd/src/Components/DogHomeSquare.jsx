function DogHomeSquare({dog, color}) {
    return(
        <div>
            <>
                <h4 style={{
                    display: 'grid',
                    alignContent: 'center',
                    justifyContent: 'center',
                      width: '100px',
                      height: '100px',
                      background: 'purple',
                      color: color
                }}>{dog}</h4>
            </>
        </div>

    )
}

export default DogHomeSquare; 