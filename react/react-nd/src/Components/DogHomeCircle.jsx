function DogHomeCircle({dog, number}) {
    return(
        <div>
            <>
                <h4 style={{
                    display: 'grid',
                    alignContent: 'center',
                    justifyContent: 'center',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'purple'
                }}>{number} {dog}</h4>
            </>
        </div>

    )
}

export default DogHomeCircle; 