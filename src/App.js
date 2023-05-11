import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "./components/page/MainPage";
import Calendar from "./components/page/CalendarPage";
import LetterPage from "./components/page/LetterPage";
import ShoppingCartPage from "./components/page/ShoppingCartPage";
import Modal from "./components/page/Modal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/letter" element={<LetterPage />} />
      <Route path="/shoppingcart" element={<ShoppingCartPage />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
}

export default App;
