import { useEffect, useState } from "react"

function Form(props){
    

    let [itemText,setItemText] =  useState("")
    let [price,setPrice] = useState(0)

    useEffect(()=>{

    },[price])

    return(
        <div className="form-group">
            <h2 className="text-center">Enter the details</h2>
            <label>Activity</label>
            <input className="form-control m-2" placeholder="Enter the acivity" value={itemText}
                onChange={(e)=>{setItemText(e.target.value)}}
            ></input>
            <label>Expenditure</label>
            <input className="form-control m-2" type="number" placeholder="Enter in rupees" value={price}
                onChange={(e)=>{setPrice(e.target.value)}}
            ></input>
            <button className="btn btn-primary m-2"
                onClick={()=>{
                    props.formData({"item":itemText,"expense":price})
                    setItemText("");
                    setPrice("");
                }}
            >Submit</button>
        </div>
    )
}



export default Form