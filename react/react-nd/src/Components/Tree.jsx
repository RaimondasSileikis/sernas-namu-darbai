function Tree({vis, name}) {
    return(
        
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                color: 'red',
                width: '150px',
                height: '150px',
                background: 'blue',
                visibility: vis
                }}>{name}
            </div>
        
    )
}

export default Tree;

