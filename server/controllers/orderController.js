const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { name, address, phone, items } = req.body;
  if (!name || !address || !phone || !items?.length) {
    return res.status(400).json({ message: "Thiếu thông tin đơn hàng." });
  }

  const order = new Order({
    name,
    address,
    phone,
    items: items.map((item) => ({
      productId: item._id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
  });

  await order.save();
  res.status(201).json({ message: "Đặt hàng thành công!" });
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi khi lấy danh sách đơn hàng" });
  }
};

exports.deleteOrderById = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xoá đơn hàng." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi xoá đơn hàng." });
  }
};
