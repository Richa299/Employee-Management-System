import Add from "./Add";
import Edit from "./Edit";
import Header from "./Header";
import List from "./List";
import { employeesData } from "../../Data";
import { useState } from "react";

function Dashboard(){

    const[empList,setEmpList]=useState(employeesData)
    const[isAdding,setIsAdding]=useState(false);
    const[isEditing,setIsEditing]=useState(false);

    return(
        <>
          {(!isAdding)&& (!isEditing)&&
          <>
          <Header setIsAdding={setIsAdding}/>
          {/* <List/> */}
          </>
          }
          {isAdding && 
            <Add/>
          }
          {isEditing &&
            <Edit/>
          }
        </>
    )
}
export default Dashboard;