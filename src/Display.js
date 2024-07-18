

let Display=(props)=>{
    return(
        <div className="b-3">
            <h2>Total:{props.total}</h2>
            <h2>Days:{props.days}</h2>
            <h2>Average:{props.average}</h2>
            <button className="btn btn-primary" onClick={props.changeDtls}>Get Current Average</button>
        </div>
    )
}


export default Display