const express = require("express");
const router = express.Router();

// 👉 Import đầy đủ cả 2 controller
const {
  createOrder,
  getAllOrders,
  deleteOrderById,
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/", getAllOrders); // ✅ không lỗi vì đã import
router.delete("/:id", deleteOrderById); // 👈 thêm dòng này

module.exports = router;
