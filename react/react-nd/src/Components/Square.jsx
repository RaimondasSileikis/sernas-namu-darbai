function Square({elements}) {
    return(
        <div style={{ gap: '10px',display: 'flex',justifyContent: 'flex-start' }} >
        {
            // elements.map((e, i) => <h1 key={i} style={{color:'#' + e}}>KV</h1>)

            elements.map((e, i) => <div key={i} style={{
                width: '50px',
                height: '50px',
                background: e,
                }}>
            </div>)
        }
        </div>
    )
}

export default Square;

