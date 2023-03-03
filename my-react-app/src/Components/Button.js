function Button (props){
    return(
        <>
        <button onClick={props.onIncHandeler}>IncClick</button>
        <button onClick={props.onDecHandeler}>DecClick</button>
        </>
    )
}
export default Button;