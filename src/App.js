import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import CardList from "./component/CardList/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetailContainer from "./component/CardDetailContainer/CardDetailContainer";
import ContextProvider from "./component/ContextProvider/contextProvider";
import Carrito from "./component/Carrito/Carrito";

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<CardList />} />
          <Route exact path="/cat/:catId" element={<CardList />} />
          <Route exact path="/cards/:cardsId" element={<CardDetailContainer />} />
          <Route exact path="/cart" element={<Carrito />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
