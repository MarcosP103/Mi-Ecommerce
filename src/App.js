import NavBar from "./component/NavBar/NavBar";
import CardList from "./component/CardList/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetailContainer from "./component/CardDetailContainer/CardDetailContainer";
import ContenedorCarrito from "./component/ContenedorCarrito/ContenedorCarrito";
import DataProvider from "./context/ColeccionContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<CardList />} />
          <Route exact path="/cat/:catId" element={<CardList />} />
          <Route exact path="/cards/:cardsId" element={<CardDetailContainer />} />
          <Route exact path="/cart" element={<ContenedorCarrito />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
