


const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require('../email/transporter')
require('dotenv').config();

const UserOtpVerification = require('../Models/otpmodel')
const User = require('../Models/usermodel');

const JWT_SECRET = 'fgqgkqGKFJJGUGQfQq3655489798`2-`19`'; // Define your secret key

router.post('/register', async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }

    const newUser = await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    try {
      const otpResponse = await sendOtpVerification(newUser.email, newUser._id);
      if (otpResponse.status === "Pending") {
        res.json({ status: "ok" });
      } else {
        res.json({ status: "error", message: "Failed to send OTP verification email" });
      }
    } catch (error) {
      console.error("Error sending OTP verification:", error);
      res.json({ status: "error", message: "Failed to send OTP verification email" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({ status: "error", message: "Failed to create user" });
  }
});



const sendOtpVerification = async (email, userId) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Otp Verification",
      html: `<p>enter otp ${otp} in the app to verify your email address and start booking this otp expires in one hour</p>`,
    };
    const saltRounds = 10;
    const hashedotp = await bcrypt.hash(otp, saltRounds);
    const newOtpVerification = await new UserOtpVerification({
      userId: userId,
      otp: hashedotp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    await newOtpVerification.save();
    await transporter.sendMail(mailOptions);
    return {
      status: "Pending",
      message: "otp verification mail sent",
      data: {
        userId: userId,
        email: email,
      },
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};



router.post("/verifyotp", async (req, res) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      throw Error("Field should not be empty");
    } else {
      const UserOtpVerificationRecords = await UserOtpVerification.find({
        userId,
      });
      if (UserOtpVerificationRecords.length <= 0) {
        throw new Error("Account invalid or already verified");
      } else {
        const { expiresAt } = UserOtpVerificationRecords[0];
        const hashedotp = UserOtpVerificationRecords[0].otp;

        if (expiresAt < Date.now()) {
          await UserOtpVerification.deleteMany({ userId });
          throw new Error("Code has expired");
        } else {
          const validOTP = await bcrypt.compare(otp, hashedotp);

          if (!validOTP) {
            throw new Error("Invalid code passed. Check your inbox");
          } else {
            await User.updateOne({ _id: userId }, { verified: true });
            await UserOtpVerification.deleteMany({ userId });
            res.json({
              status: "verified",
              message: "user email verified successfully",
            });
          }
        }
      }
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});






router.post('/login', async (req, res) => {
  const { email, password } = req.body;
 
  const user = await User.findOne({ email  });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });
    const currentUser = {
        name: user.fname,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      console.log(currentUser)
      return res.json({ status: "ok", data: { token, currentUser } });
  
  }

  res.json({ status: "error", error: "Invalid Password" });
});

module.exports = router;
