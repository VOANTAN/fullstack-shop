const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
