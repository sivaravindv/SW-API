import SideBar from './Components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';
import DataTable from './Components/DataTable';
import './App.css';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <NavBar />
        <DataTable />
      </Router>
    </>
  );
}

export default App;
