import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";

import { CartProvider } from "./context/CartContext";

import Cart from "./pages/Cart";

import Checkout from "./pages/Checkout";

import AdminOrders from "./pages/AdminOrders";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/admin/orders" element={<AdminOrders />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
