import Form from "./Form"
import Table from "./Table"
import Display from "./Display"
import {useEffect,useState} from 'react'
import { getData , postData ,getDetails ,putDetails , putChanges} from "./api"

function App(){
  let test=0;
  console.log(test);

  const [items, setItems] = useState([])
  const [detls,setDtls] = useState({})
  const [checkID,setCheckID] = useState(1);
  useEffect(
    ()=>{
      bringDetails()
      //updatingCurrentID();
      getItems();
    },[checkID]
  )
  

  let updatingCurrentDetails = async() =>{
    let currentDays = getNoDays()
    let newAverage = Math.ceil(detls.total/currentDays)
    await putChanges(currentDays,newAverage);
    bringDetails();
  }


  let getNoDays = () =>{
    let start = new Date('June 24,2024 05:05:05').getTime();
    let end = new Date().getTime();
    let new_time = end - start;
    return Math.ceil(new_time/86400000);
    //return 44;
  }

  let changeDetails = async(price)=>{
    //Changing value of total
    let res = await getDetails();
    let [first_obj] = res.data;
    let newTotal = parseInt(first_obj.total)+ parseInt(price)
    //Changing value of days
    let newDays = getNoDays();
    //Changing value of average
     let newAverage=Math.ceil(newTotal/newDays)
    //Putting of changed details
    await putDetails(newTotal,newDays,newAverage,checkID+1);
    setCheckID(checkID+1);
  }

  let getItems = async()=>{
    let res = await getData()
    setItems(res.data)
  }

  let bringDetails=async()=>{
    let details = await getDetails()
    let [first_ind] = details.data;
    setDtls(first_ind); 
    setCheckID(first_ind.rowID)
    
  }

  let getToday = () =>{
    let months={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nove",11:"Dec"}
    let today=new Date();
    let dd = today.getDate();
    let mm = months[today.getMonth()];
    let yy = today.getFullYear();
    return dd + "/" + mm + "/" + yy; 
  }

  let getDataFrom_Form = async(data)=>{
    let d = getToday()
    let mod_data ={...data,"date":d,"id":checkID}
    await postInto(mod_data);
    await getItems();
    await changeDetails(data.expense)


  }

  let postInto= async (data)=>{
    await postData(data)
  }
  
  return(
    <>
      <h1 className="text-center bg-info bg-gradient">MY EXPENSES</h1>
      <div className="look border border-dark rounded">
        <Form formData={getDataFrom_Form} ></Form>
        <Display total={detls.total} days={detls.days} average={detls.average} changeDtls={updatingCurrentDetails}></Display>
      </div>
      <h1 className="text-center m-4">Expenses from 12-Jul-2024</h1>
      <Table data={items}></Table>
    </>
  )
}

export default App