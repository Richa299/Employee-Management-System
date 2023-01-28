import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
function Add({setIsAdding,empList,setEmpList,setIsDashboard}){

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [salary, setSalary]=useState('');
    const [date,setDate]=useState('');
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
        
    },[])

    const handleAdd=(e)=>{
        e.preventDefault();
        if(!firstName || !lastName || !email || !address || !salary || !date){
              return Swal.fire({
                icon:"error",
                title:"Error!",
                text:"All field are required"
              }
              )
        }
        const id=empList.length+1;
        const newEmployee={
            id,
            firstName,
            lastName,
            email,
            address,
            salary,
            date
        }
       empList.push(newEmployee)
       setEmpList(empList)
       setIsAdding(false)
       setIsDashboard(true)
    }
    
    return(
        <div className="w-5/6 mx-auto">
            <div className="header-part bg-green-500 w-148 h-16">
            <h3 className="font-bold text-2xl pt-3 text-center">Add Employee</h3>
            </div>
            <form className="text-left ml-4 p-4 flex flex-col mt-3">
            <label className="label-inputs">First Name</label>
            <input 
                 type="text" 
                 className="input-items" 
                 ref={inputRef}
                 onChange={e=>setFirstName(e.target.value)}/>


            <label className="label-inputs">Last Name</label>
            <input 
                 type="text" 
                 className="input-items" 
                 onChange={e=>setLastName(e.target.value)}/>


            <label className="label-inputs">Email</label>
            <input 
                 type="email" 
                 className="input-items"
                 onChange={e=>setEmail(e.target.value)} />


            <label className="label-inputs">Address</label>
            <input 
                  type="text" 
                  className="input-items" 
                  onChange={e=>setAddress(e.target.value)}/>


            <div>
            <label className="label-inputs">Salary</label>
            <input 
                  type="number" 
                  className="salary" 
                  onChange={e=>setSalary(e.target.value)}/>


            <label className="label-inputs-dat">Date</label>
            <input 
                  type="date" 
                  className="date"
                  onChange={e=>setDate(e.target.value)} />
            </div>
            <div>
            <button className="add-button" onClick={handleAdd}>Add</button>
            <button className="cancel-button" onClick={()=>{setIsAdding(false)}}>Cancel</button>
            </div>
            </form>
        </div>
    )
};
export default Add;