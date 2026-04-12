// controllers/orderController.js
import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  // console.log("BODY:", req.body);
  try {
    const { items, totalAmount, address, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = await Order.create({
      user: "69da6d28a049182d3706ba67",
      items,
      totalAmount,
      address,
      paymentMethod,
    });

    res.status(201).json({
      success: true,
      order,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};