import {IoPersonAddSharp} from 'react-icons/io5'
import {CgHome} from 'react-icons/cg'
import {BsFillBarChartFill, BsFillGridFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
function SideBar({setIsAdding}){
    return(
        <div className='sidebar-expand flex w-24 bg-yellow-500 h-screen text-black-900 text-0.5'>
        <ul className="mt-28">
            <SideBarIcon icon={<CgHome/>} text={"Dashboard"}/>
            <SideBarIcon icon={<IoPersonAddSharp/> } text={"Add Employee"} setIsAdding={setIsAdding} />
            <SideBarIcon icon={<BsFillGridFill/>} text={"Projects"}/>
            <SideBarIcon icon={<BsFillBarChartFill/>} text={"Reports"}/>
            <SideBarIcon icon={<AiFillSetting/>} text={"Settings"}/>
        </ul>
        </div>
    )
}
const SideBarIcon=({icon, text={text} ,setIsAdding})=>(
<div className='sidebar-icon'>
  <p className='flex group'>
     <span className='mt-1'  onClick={()=>setIsAdding(true)}>{icon}</span>
     <span className='tool group-hover:scale-100' onClick={()=>setIsAdding(true)}>{text}</span>
   </p>
</div>
);

export default SideBar