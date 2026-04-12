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