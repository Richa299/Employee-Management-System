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
  const[isDashboard,setIsDashboard]=useState(true);
  const[selectedEmp, setSelectedEmp]=useState(null)
  return (
    <div className='w-full text-center'>
       <h1 className="text-2xl font-bold text-yellow-700 pt-3 bg-gray-800 h-16">Employee Management System</h1>
    <div className="flex">
    <SideBar setIsAdding={setIsAdding} setIsDashboard={setIsDashboard} setIsEditing={setIsEditing}/>

    {(!isAdding)&& (!isEditing)&& (isDashboard)&&
          <List 
          empList={empList} 
          setIsEditing={setIsEditing} 
          setEmpList={setEmpList} 
          setSelectedEmp={setSelectedEmp}/>
    }
   
    {isAdding && 
            <Add 
            setIsAdding={setIsAdding} 
            setEmpList={setEmpList} 
            empList={empList}
            setIsDashboard={setIsDashboard}/>
    }

   {isEditing &&
            <Edit 
            setIsEditing={setIsEditing} 
            selectedEmp={selectedEmp}
            empList={empList}
            setEmpList={setEmpList}
            />
   }
    </div>
    </div>
  );
}

export default App;
