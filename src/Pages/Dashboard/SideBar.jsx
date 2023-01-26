import {IoPersonAddSharp} from 'react-icons/io5'
import {CgHome} from 'react-icons/cg'
import {GrProjects} from 'react-icons/gr'
import {BsFillBarChartFill} from 'react-icons/bs'
function SideBar(){
    return(
        <div className="container fixed top-0 h-screen w-32 bg-yellow-500">
        <ul className="ml-4 mt-32 space-y-4">
            <li><CgHome size="1rem"/> </li>
            <li><IoPersonAddSharp size="1rem"/> </li>
            <li><GrProjects size="1rem"/> </li>
            <li><BsFillBarChartFill size="1rem"/> </li>
            <li><IoPersonAddSharp size="1rem"/> </li>
        </ul>
        </div>
    )
}
export default SideBar