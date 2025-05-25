import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        🛍️ Hà Toàn
      </Link>

      <Link to="/admin/orders" className="btn btn-outline-warning ms-2">
        Quản lý đơn
      </Link>

      <Link to="/cart" className="btn btn-outline-light ms-2">
        Giỏ hàng
      </Link>
    </nav>
  );
}
