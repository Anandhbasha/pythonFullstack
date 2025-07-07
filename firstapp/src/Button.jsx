// function Button(props){
//     return(
//         <div className="btn">
//             <button>{props.value}</button>
//             <button>{props.val}</button>
//         </div>
//     )
// }
// export default Button
function Button({value,val}){
    return(
        <div className="btn">
            <button>{value}</button>
            <button>{val}</button>
        </div>
    )
}
export default Button