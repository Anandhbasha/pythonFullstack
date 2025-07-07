function Button(props){
    return(
        <div className="btn">
            <button>{props.value}</button>
            <button>{props.val}</button>
        </div>
    )
}
export default Button