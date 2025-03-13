const user = require("../model/user");
const jwt = require("jsonwebtoken");

const fruits = ["apple", "banana", "mango", "pinapple"];

module.exports.registerUser = async (req, res) => {
  try {
    let { name, password, email } = req.body;
    let newUser = new user({
      name,
      password,
      email,
    });

    await newUser.save();
    return res.json({ message: "user created successfully" });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    let { password, email } = req.body;
    let result = await user.findOne({ email });
    if (!result) {
      return res.json({ message: "enter valid email" });
    }

    if (result.password === password) {
      let accessToken = jwt.sign({ email }, process.env.access_token_secret, {
        expiresIn: '1m',
      });

      let refreshToken = jwt.sign({ email }, process.env.refresh_token_secret , {
        expiresIn: "3m",
      });

      const accessTokenOptions = {
        httpOnly: true, 
        secure: false,
        sameSite: "Strict", 
        maxAge: 1 * 60 * 1000, 
      };

      const refreshTokenOptions = {
        httpOnly: true, // Refresh tokens should always be httpOnly
        secure: false, // Use only in HTTPS
        sameSite: "Strict", // Adjust as per your needs
        maxAge: 3 * 60 * 1000, // 5 minutes
      };

      // // Set cookies
      res.cookie("access_token", accessToken, accessTokenOptions);
      res.cookie("refresh_token", refreshToken, refreshTokenOptions);

      res.status(201).json({ msg: "login succesfully" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.ProtectedData = async (req, res) => {
  console.log(req.body);
  res.send(fruits);
};
