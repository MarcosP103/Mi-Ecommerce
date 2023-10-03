import './App.css';
import NavBar from './component/NavBar/NavBar';
import CardList from './component/CardList/CardList';
import BootStrap from './component/BootStrap/BootStrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<CardList/>}/>
      <Route exact path='/Boot' element={<BootStrap/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
