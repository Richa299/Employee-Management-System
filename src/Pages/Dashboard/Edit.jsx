import { useState } from "react";
import Swal from "sweetalert2";

function Edit({setIsEditing,selectedEmp, empList, setEmpList}){

      const id=selectedEmp.id;
      const[firstName, setFirstName]=useState(selectedEmp.firstName);
      const[lastName, setLastName]=useState(selectedEmp.lastName);
      const[email, setEmail]=useState(selectedEmp.email);
      const[salary, setSalary]=useState(selectedEmp.salary);
      const[date, setDate]=useState(selectedEmp.date);
    const handleEditForm=(e)=>{
          e.preventDefault();
        if(!firstName || !lastName || !email || !salary || !date){
              return Swal.fire({
                icon:"error",
                title:"Error!",
                text:"All field are required"
              }
              )
        }
         const newEmployee={
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        
        for(let i=0;i<empList.length;i++){
            if(empList[i].id===id){
                  empList.splice(i,1,newEmployee);
                  break;
            }
        }
       setEmpList(empList)
       setIsEditing(false)

       Swal.fire({
            icon:"success",
            title:"Updated!",
            text:`${newEmployee.firstName} ${newEmployee.lastName}'s data has been updated`,
            showConfirmButton:false,
            timer:2000
       })
        
    }
    return(
        <div className="w-5/6 mx-auto">
        <div className="header-part bg-green-500 w-148 h-16">
        <h3 className="font-bold text-2xl pt-3 text-center">Edit Employee</h3>
        </div>
        <form className="text-left ml-4 p-4 flex flex-col mt-3">
        <label className="label-inputs">First Name</label>
        <input 
             type="text" 
             className="input-items" 
             value={firstName}
             onChange={(e)=>setFirstName(e.target.value)}/>


        <label className="label-inputs">Last Name</label>
        <input 
             type="text" 
             className="input-items"
             value={lastName}
             onChange={(e)=>setLastName(e.target.value)} />


        <label className="label-inputs">Email</label>
        <input 
             type="email" 
             className="input-items" 
             value={email}
             onChange={(e)=>setEmail(e.target.value)}/>

        <div>
        <label className="label-inputs">Salary</label>
        <input 
              type="number" 
              className="salary" 
              value={salary}
              onChange={(e)=>setSalary(e.target.value)}/>


        <label className="label-inputs-dat">Date</label>
        <input 
              type="date" 
              className="date" 
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              />
        </div>
        <div>
        <button className="add-button" onClick={handleEditForm}>Update</button>
        <button className="cancel-button" onClick={()=>{setIsEditing(false)}}>Cancel</button>
        </div>
        </form>
    </div>
    )
}
export default Edit;