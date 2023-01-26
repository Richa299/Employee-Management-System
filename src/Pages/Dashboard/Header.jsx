import {IoPersonAddSharp} from 'react-icons/io5'
function Header({setIsAdding}){
    const buttonStyle=`bg-blue-500 hover:bg-blue-700 text-white mt-2 w-32 text-sm rounded flex space-x-3`
    return(
        <div className="text-center items-center">
            <h2 className="text-3xl text-blue-500">Employee Management System</h2>
            
            {/* <button className= {buttonStyle}
                    onClick={()=>setIsAdding(true)}>
                        <p>Add employee</p>
                        <IoPersonAddSharp size="1rem"/> 
            </button>
            <button className= {buttonStyle}
                    onClick={()=>setIsAdding(true)}>
                        <p>Add employee</p>
                        <IoPersonAddSharp size="1rem"/> 
            </button>
            <button className= {buttonStyle}
                    onClick={()=>setIsAdding(true)}>
                        <p>Add employee</p>
                        <IoPersonAddSharp size="1rem"/> 
            </button> */}
            <div></div>
        </div>
    )
}
export default Header;
