import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import CardList from "./component/CardList/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CardList />}/>
        <Route exact path="/cat" element={<CardList/>} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
