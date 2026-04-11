import jwt from "jsonwebtoken";
import User from "../models/User.js";

// ✅ Check user logged in
export const protect = async (req, res, next) => {
  let token;

  try {
    // 🔍 Token get from header
    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    // ❌ No token
    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }

    // 🔐 Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 👤 Get user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // ✅ Attach user to request
    req.user = user;

    next();

  } catch (error) {
    console.error(error);
    res.status(401).json({
      message: "Not authorized, token failed",
    });
  }
};

// 🎯 Role-based access
export const authorize = (...roles) => {
  return (req, res, next) => {

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Access denied for role: ${req.user.role}`,
      });
    }

    next();
  };
};