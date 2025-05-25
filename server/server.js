const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Đã kết nối MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server chạy tại cổng: ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB lỗi:", err));
