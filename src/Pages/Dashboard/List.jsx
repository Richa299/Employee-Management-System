import Swal from "sweetalert2"

function List({setIsEditing, empList, setEmpList, setSelectedEmp}){

const handleEdit=(id)=>{
    const [employee]=empList.filter(employee=>
        employee.id===id);
        setSelectedEmp(employee);
        setIsEditing(true);
}
const handleDelete=(id)=>{
Swal.fire({
    icon:'warning',
    title:"Are you sure?",
    text:"You won't be able to revert this!",
    showCancelButton:true,
    confirmButtonText:"Yes, delete it!",
    cancelButtonText:"No, cancel!"
}).then (result=>{
    if(result.value){
        const [employee]=empList.filter(employee=>
            employee.id===id);

            Swal.fire({
                icon:"Success",
                title:"Deleted!",
                text:`${employee.firstName} ${employee.lastName}'s data has been deleted`,
                showConfirmButton:false,
                timer:2000
            })
            setEmpList(empList.filter(employee=>employee.id!==id))
    }
})
}
    return(
         <div className="w-4/5 text-center">
            <h1 className="text-2xl font-bold text-blue-500">Employee Management System</h1>
            <table className="striped-table text-center">
                <thead>
                    <tr>
                        <th className="border p-1 text-xs h-1 w-10 border-slate-300 border-spacing-x-96">No.</th>
                        <th className="border p-1 text-xs h-1 w-32 border-slate-300 border-spacing-x-96">First Name</th>
                        <th className="border p-1 text-xs h-1 w-32 border-slate-300 border-spacing-x-96">Last Name</th>
                        <th className="border p-1 text-xs h-1 w-48 border-slate-300 border-spacing-x-96">Email</th>
                        <th className="border p-1 text-xs h-1 w-20 border-slate-300 border-spacing-x-96">Salary</th>
                        <th className="border p-1 text-xs h-1 w-24 border-slate-300 border-spacing-x-96">Date</th>
                        <th className="border p-1 text-xs h-1 w-44 border-slate-300 border-spacing-x-96">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {empList.map((val,index)=>{
                        return(
                          <tr className="text-xs">
                          <td className="border p-1 text-xs h-1 w-8 border-slate-300 border-spacing-x-96">{val.id}</td>
                          <td className="border p-1 text-xs h-1 w-32 border-slate-300 border-spacing-x-96">{val.firstName}</td>
                          <td className="border p-1 text-xs h-1 w-32 border-slate-300 border-spacing-x-96">{val.lastName}</td>
                          <td className="border p-1 text-xs h-1 w-48 border-slate-300 border-spacing-x-96">{val.email}</td>
                          <td className="border p-1 text-xs h-1 w-20 border-slate-300 border-spacing-x-96">${val.salary}</td>
                          <td className="border p-1 text-xs h-1 w-24 border-slate-300 border-spacing-x-96">{val.date}</td>
                          <td className="border p-1 text-xs h-1 w-44 border-slate-300 border-spacing-x-96">
                            <button className="w-12 border border-slate-300 hover:bg-blue-700 h-6 hover:text-white" 
                            onClick={()=>handleEdit(val.id)}>Edit</button>
                            <button className="w-12 border border-slate-300 ml-4 hover:bg-red-700 h-6 hover:text-white"
                            onClick={()=>handleDelete(val.id)}>Delete</button>
                          </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
         </div>
    )
}
export default List;