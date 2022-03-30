function Tree1({elements}) {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            }} >
        {
            //  elements.map((e, i) => <h1 key={i} style={{color:'#' + e}}>KV</h1>)

            elements.map((e, i) => <div key={i} style={{
                color: 'red',
                width: '150px',
                height: '150px',
                background: 'blue',
                
                }}>{e}
            </div>)
        }
        </div>
    )
}

export default Tree1;

