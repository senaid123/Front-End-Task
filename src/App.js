import './App.css';
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Main from "./Components/Main"
const  App = () => {
  return (
    <div className="app">
      
      <div className="app-top">
      <Navbar/>
      </div>

      <div className="app-bottom">
      <Sidebar/>
      <Main/>
      </div>
    </div>
  );
}

export default App;
