const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 600 } // Expires in 10 minutes
});

module.exports = mongoose.model("Otp", OtpSchema);