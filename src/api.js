import axios from "axios"

let items_url = "http://localhost:4200/expenses";
let details_url = "http://localhost:4200/details"
let id =1;
export async function getData(){
    return await axios.get(items_url)
}

export async function postData(data){
    return await axios.post(items_url,data,
        {
            headers:{
                "Content-Type":"application.json"
            }
        }
    )
}

export async function getDetails(){
    return await axios.get(details_url)
}

export async function putDetails(tot,ds,avg,curRow){
    //console.log(tot,ds,avg)
    return await axios.put(details_url+`/${id}`,
        { 
            "total":tot,
            "days":ds,
            "average":avg,
            "rowID":curRow,
        }
    ) 
}

export async function putChanges(noOfDays,avg){
    return await axios.patch(details_url+`/${id}`,
        {
            "days":noOfDays,
            "average":avg
        }
    )
}
