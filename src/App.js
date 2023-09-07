import logo from './logo.svg';
import './App.css';
import Polyfill from './component/Polyfill/Polyfill.js';
import Prueba from './component/Prueba/Prueba.js';



function App() {
  return (
    <div className="App">
      <Polyfill/>
      <Prueba/>
      
    </div>
  );
}

export default App;
