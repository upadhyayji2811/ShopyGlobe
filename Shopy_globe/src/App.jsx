import Header from "./compnents/Header";
import "./App.css";
import Cart from "./compnents/Cart.jsx";
import Home from "./Home.jsx";
import NotFound from "./compnents/NotFound.jsx"; // Import the NotFound component
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} /> {/* Handle unknown routes */}
      </Routes>
    </>
  );
}

export default App;
