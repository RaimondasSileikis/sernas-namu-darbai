function ResidentBala({resident}) {
    return(
        <div>
            <>
                <h3>
                    {resident.type}
                </h3>

                <h3 style={{
                    color:resident.color
                }}>{resident.name}</h3>
            </>
        </div>

    )
}

export default ResidentBala; 