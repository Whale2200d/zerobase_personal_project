import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "./components/page/MainPage";
import CalendarPage2 from "./components/page/CalendarPage2";
import LetterPage from "./components/page/LetterPage";
import ShoppingCartPage from "./components/page/ShoppingCartPage";
import LoginModal from "./components/modal/LoginModal";
import SignUpModal from "./components/modal/SignUpModal";
import DeliveryInfoModal from "./components/modal/DeliveryInfoModal";
import AlarmInfoModal from "./components/modal/AlarmInfoModal";
import TakerInfoModal from "./components/modal/TakerInfoModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/calendar" element={<CalendarPage2 />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignUpModal />} />
        <Route path="/delivery" element={<DeliveryInfoModal />} />
        <Route path="/alarm" element={<AlarmInfoModal />} />
        <Route path="/takerinfo" element={<TakerInfoModal />} />
      </Routes>
    </>
  );
}

export default App;
