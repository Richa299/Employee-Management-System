import './App.css';
import Dashboard from './Pages/Dashboard';
import SideBar from './Pages/Dashboard/SideBar';

function App() {
  return (
    <div className="mx-auto">
    <SideBar/>
     <Dashboard/> 
    </div>
  );
}

export default App;
