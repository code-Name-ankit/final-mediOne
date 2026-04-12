import LabOrder from "../models/LabOrder.js";

export const createLabOrder = async (req, res) => {
  try {
    const { labId, labName, price, tax, totalAmount, type } = req.body;

    const newLabOrder = new LabOrder({
      labId,
      labName,
      testType: type,
      price,
      tax,
      totalAmount
    });

    const savedOrder = await newLabOrder.save();
    
    res.status(201).json({ 
      success: true, 
      message: "Lab appointment booked!", 
      order: savedOrder 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Saare orders fetch karne ke liye
export const getAllOrders = async (req, res) => {
  try {
    // .sort({ createdAt: -1 }) se naye orders sabse upar dikhenge
    const orders = await LabOrder.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: orders.length,
      orders: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error: Orders fetch nahi ho sake",
      error: error.message
    });
  }
};