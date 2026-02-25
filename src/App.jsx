import './App.css'
import Navbar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import Mission from './components/mission'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Mission/>
    </div>
  );
}

export default App;