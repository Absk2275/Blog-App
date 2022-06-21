const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/keys");

exports.signupController = async (req, res) => {
  // console.log(req.body);
  const { username, email, phoneNo, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        errorMessage: "Email already exist",
      });
    }

    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.phoneNo = phoneNo;

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // console.log(newUser.password);
    await newUser.save();
    res.json({
      successMessage: "Registration success. Please Signin",
    });
  } catch (err) {
    console.log("signupController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.signinController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errorMessage: "Ivalid credentials",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Invalid Credentials",
      });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };
    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
      if (err) console.log("jwt error", err);
      const { _id, username, email, phoneNo, role } = user;

      res.json({
        token,
        user: { _id, username, email, phoneNo, role },
      });
    });
  } catch (err) {
    console.log("signinController error", err);
    res.status(500).json({
      errorMessage: "Server Error",
    });
  }
};
