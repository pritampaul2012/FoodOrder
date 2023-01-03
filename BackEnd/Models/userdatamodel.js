const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  street: String,
  postal: Number,
  city: String,
  date: Date,
  orderedItems: Array,
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
