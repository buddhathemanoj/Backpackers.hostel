


const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error" });
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
