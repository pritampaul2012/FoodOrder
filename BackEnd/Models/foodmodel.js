const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Food = mongoose.model("foods", foodSchema);

module.exports = Food;
