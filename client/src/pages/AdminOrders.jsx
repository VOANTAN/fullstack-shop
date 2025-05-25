import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ cần thêm dòng này

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>📦 Danh sách đơn hàng</h2>
      {orders.map((order) => (
        <div className="card mb-3" key={order._id}>
          <div className="card-header">
            🧑 {order.name} – 📞 {order.phone}
          </div>
          <div className="card-body">
            <p>📍 {order.address}</p>
            <ul>
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.quantity} —{" "}
                  {(item.price * item.quantity).toLocaleString()}₫
                </li>
              ))}
            </ul>
            <p className="fw-bold">
              Tổng tiền:{" "}
              {order.items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
              ₫
            </p>

            <button
              className="btn btn-sm btn-danger mt-2"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc chắn xoá đơn hàng này không?")
                ) {
                  axios
                    .delete(
                      `https://fullstack-backend-2sx6.onrender.com/api/orders/${order._id}`
                    )
                    .then(() => {
                      toast.success("✅ Đã xoá đơn hàng!");
                      setOrders((prev) =>
                        prev.filter((o) => o._id !== order._id)
                      );
                    })
                    .catch(() => toast.error("❌ Lỗi xoá đơn hàng!"));
                }
              }}
            >
              ❌ Xoá đơn hàng
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
