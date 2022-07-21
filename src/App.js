import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Gettrial } from './Components/Gettrial';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     {/* <Gettrial/> */}
    </div>
  );
}

export default App;
