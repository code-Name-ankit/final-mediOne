import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//  REGISTER
export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      phone,
      address,
      city,
      state,
      specialization,
      licenseNumber,
      location,
    } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      phone,
      address,
      city,
      state,
      specialization,
      licenseNumber,
      location,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};


//LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // 🔐 Password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // 🔥 Role check (optional)
    if (role && user.role !== role) {
      return res.status(400).json({
        message: "Invalid role selected",
      });
    }

    // 🔑 Token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};