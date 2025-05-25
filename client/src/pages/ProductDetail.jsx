import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div className="container mt-4">Đang tải...</div>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid mb-3"
        style={{ maxWidth: "400px" }}
      />
      <p>{product.description}</p>
      <h4>{product.price.toLocaleString()}₫</h4>

      <button
        className="btn btn-success mt-3"
        onClick={() => {
          addToCart(product);
          toast.success("✅ Đã thêm vào giỏ hàng!");
        }}
      >
        🛒 Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export default ProductDetail;
