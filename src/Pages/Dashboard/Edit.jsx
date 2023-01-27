function Edit({setIsEditing}){
    const handleAdd=()=>{}
    return(
        <div className="w-5/6 mx-auto">
        <div className="header-part bg-green-500 w-148 h-16">
        <h3 className="font-bold text-2xl pt-3 text-center">Edit Employee</h3>
        </div>
        <form className="text-left ml-4 p-4 flex flex-col mt-3">
        <label className="label-inputs">First Name</label>
        <input 
             type="text" 
             className="input-items" />
        <label className="label-inputs">Last Name</label>
        <input 
             type="text" 
             className="input-items" />
        <label className="label-inputs">Email</label>
        <input 
             type="email" 
             className="input-items" />
        <label className="label-inputs">Address</label>
        <input 
              type="text" 
              className="input-items" />
        <div>
        <label className="label-inputs">Salary</label>
        <input 
              type="number" 
              className="salary" />
        <label className="label-inputs-dat">Date</label>
        <input 
              type="date" 
              className="date" />
        </div>
        <div>
        <button className="add-button" onClick={handleAdd}>Add</button>
        <button className="cancel-button" onClick={()=>{setIsEditing(false)}}>Cancel</button>
        </div>
        </form>
    </div>
    )
}
export default Edit;