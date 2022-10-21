import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import MainApp from './MainApp';


function App() {
  return (
    <Router>
      <Navbar/>
      <main className="main">
        <MainApp/>
      </main>
    </Router>
  );
}

export default App;
