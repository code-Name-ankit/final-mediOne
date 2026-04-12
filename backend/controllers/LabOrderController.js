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

// Report Upload logic
export const uploadReport = async (req, res) => {
  try {
    const { orderId } = req.params;
    
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Database mein report ka path aur status update karna
    const updatedOrder = await LabOrder.findByIdAndUpdate(
      orderId,
      { 
        reportFile: req.file.path, 
        status: "Completed" // Report upload hote hi status Completed kar dein
      },
      { new: true }
    );

    res.status(200).json({ 
      success: true, 
      message: "Report uploaded successfully!", 
      order: updatedOrder 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};