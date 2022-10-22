import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainApp from './MainApp';


function App() {
  return (
    <>
      <Navbar/>
      <main className="main">
        <MainApp/>
      </main>
    </>
  );
}

export default App;
