import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    phone: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user", "doctor", "medical", "lab"],
      default: "user",
    },

    address: String,
    city: String,
    state: String,

    // Optional (for doctor/medical/lab)
    specialization: String, // doctor
    licenseNumber: String, // doctor/medical/lab

    // Location (for map features)
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number], // [lng, lat]
      },
    },

    image: String,

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Geo index (for doctor/lab/medical search)
userSchema.index({ location: "2dsphere" });

const User = mongoose.model("User", userSchema);

export default User;
