const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const UserOtpVerificationSchema = new Schema({
    userId:String,
    otp:String,
    createdat:Date,
    expiresAt:Date
})

const UserOtpVerification = mongoose.model("UserOtpVerification" , UserOtpVerificationSchema)

module.exports = UserOtpVerification