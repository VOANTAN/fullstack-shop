import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return toast.error("Giỏ hàng trống!");

    try {
      await axios.post(
        "https://fullstack-backend-2sx6.onrender.com/api/orders",
        {
          ...form,
          items: cart,
        }
      );

      toast.success("✅ Đặt hàng thành công!");
      setCart([]);
      localStorage.removeItem("cart");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Lỗi khi đặt hàng!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>📝 Thông tin đặt hàng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Họ tên"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Địa chỉ giao hàng"
          required
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Số điện thoại"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button type="submit" className="btn btn-primary">
          ✅ Xác nhận đặt hàng
        </button>
      </form>
    </div>
  );
}
