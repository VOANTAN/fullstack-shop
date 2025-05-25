import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>🛒 Giỏ hàng của bạn</h2>

      {cart.length === 0 ? (
        <p>Giỏ hàng đang trống</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="card mb-2" key={item._id}>
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5>{item.name}</h5>
                  <p>Số lượng: {item.quantity}</p>
                  <p>Giá: {(item.price * item.quantity).toLocaleString()}₫</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item._id)}
                >
                  ❌ Xoá
                </button>
              </div>
            </div>
          ))}

          <h4 className="mt-3">Tổng tiền: {total.toLocaleString()}₫</h4>

          <Link to="/checkout" className="btn btn-success mt-3">
            ✅ Tiến hành đặt hàng
          </Link>
        </>
      )}
    </div>
  );
}
