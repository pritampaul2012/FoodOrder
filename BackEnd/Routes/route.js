const express = require("express");
const router = express.Router();
const Food = require("../Models/foodmodel");
const Order = require("../Models/userdatamodel");

router.route("/foodlist").get(async (req, res) => {
  const fetchedFood = await Food.find();
  res.json(fetchedFood);
});

router.route("/orders").post(async (req, res) => {
  const { name, street, postal, city, date, orderedItems } = req.body;
  const newOrder = new Order({
    name,
    street,
    postal,
    city,
    date,
    orderedItems,
  });
  newOrder.save();
});

module.exports = router;
