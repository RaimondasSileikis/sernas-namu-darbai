function DogHomeTriangle({dog}) {
    return(
        <div>
            <>
                <h4 style={{
                    display: 'grid',
                    alignContent: 'center',
                    justifyContent: 'center',
                      width: '0',
                      height: '0',
                      borderLeft: '50px solid transparent',
                      borderRight: '50px solid transparent',
                      borderBottom: '100px solid purple'

                }}>{dog}</h4>
            </>
        </div>

    )
}

export default DogHomeTriangle; 