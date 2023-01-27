import { useState } from 'react';
import './App.css';
import SideBar from './Pages/Dashboard/SideBar';
import List from "./Pages/Dashboard/List";
import { employeesData } from "./Data";
import Add from './Pages/Dashboard/Add';
import Edit from './Pages/Dashboard/Edit';

function App() {
  const[empList,setEmpList]=useState(employeesData)
  const[isAdding,setIsAdding]=useState(false);
  const[isEditing,setIsEditing]=useState(false);
  return (
    <div className="flex">
    <SideBar setIsAdding={setIsAdding}/>
    {(!isAdding)&& (!isEditing)&&
          <List empList={empList} setIsEditing={setIsEditing}/>
          }
          {isAdding && 
            <Add setIsAdding={setIsAdding} setEmpList={setEmpList} empList={empList}/>
          }
          {isEditing &&
            <Edit setIsEditing={setIsEditing}/>
          }
    </div>
  );
}

export default App;
