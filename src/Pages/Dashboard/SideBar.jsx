import {IoPersonAddSharp} from 'react-icons/io5'
import {CgHome} from 'react-icons/cg'
import {BsFillBarChartFill, BsFillGridFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
function SideBar({setIsAdding, setIsDashboard,setIsEditing}){
    return(
        <div className='sidebar-expand flex w-24 bg-yellow-500 h-screen text-black-900 text-0.5'>
        <ul className="mt-28">
            <SideBarIcon icon={<CgHome/>} text="Dashboard" 
            setIsDashboard={setIsDashboard} 
            setIsAdding={setIsAdding} 
            setIsEditing={setIsEditing}/>

            <SideBarIcon icon={<IoPersonAddSharp/> } text="Add Employee" 
            setIsAdding={setIsAdding} 
            setIsDashboard={setIsDashboard} 
            setIsEditing={setIsEditing}/>

            <SideBarIcon icon={<BsFillGridFill/>} text="Projects"/>
            <SideBarIcon icon={<BsFillBarChartFill/>} text="Reports"/>
            <SideBarIcon icon={<AiFillSetting/>} text="Settings"/>
        </ul>
        </div>
    )
}
const SideBarIcon=({icon, text ,setIsAdding, setIsDashboard, setIsEditing})=>(

<div className='sidebar-icon'>
  <p className='flex group'>

    {(text==="Dashboard") && 
    <span className='mt-1'  onClick={()=>{
       setIsDashboard(true)
       setIsAdding(false);
       setIsEditing(false);
    }}>{icon}</span>
    }

     {(text==="Add Employee") &&  
     <span className='mt-1'  onClick={()=>{
        setIsAdding(true);
        setIsEditing(false);
        setIsDashboard(false);
     }}>{icon}</span>
    }
    {text!=="Dashboard" && text!=="Add Employee" &&
     <span className='mt-1'>{icon}</span>
    }

<span className='tool group-hover:scale-100' >{text}</span> 
   </p>
</div>
);

export default SideBar