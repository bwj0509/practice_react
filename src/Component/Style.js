function Style(){

    const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : 24,
        padding: '1rem'
    }
    const name = 'REACT'


    return(
        <>
            <div style={style}>{name}</div>
        </>
    )
}
export default Style