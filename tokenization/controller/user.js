const user = require("../model/user");
const jwt = require("jsonwebtoken");


const users = [
    { id: 1, name: "Deepak", email: "deepak@example.com", age: 25 },
    { id: 2, name: "Nidhi", email: "nidhi@example.com", age: 23 },
    { id: 3, name: "Amit", email: "amit@example.com", age: 30 },
    { id: 4, name: "Priya", email: "priya@example.com", age: 27 },
    { id: 5, name: "Raj", email: "raj@example.com", age: 29 },
    { id: 6, name: "Simran", email: "simran@example.com", age: 26 },
    { id: 7, name: "Karan", email: "karan@example.com", age: 28 },
    { id: 8, name: "Ayesha", email: "ayesha@example.com", age: 24 },
    { id: 9, name: "Sanjay", email: "sanjay@example.com", age: 32 },
    { id: 10, name: "Neha", email: "neha@example.com", age: 22 }
];

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
      let accessToken = jwt.sign({ email }, "access-token-secret", {
        expiresIn: "1m",
      });
      let refreshToken = jwt.sign({ email }, "refresh-token-secret", {
        expiresIn: "5m",
      });

      const accessTokenOptions = {
        httpOnly: true, // Prevents client-side access (XSS protection)
        secure: false, // Required for HTTPS (remove if using localhost)
        sameSite: "Strict", // Helps prevent CSRF attacks
        maxAge: 60 * 1000, // 1 minute
      };


      const refreshTokenOptions = {
        httpOnly: true, // Refresh tokens should always be httpOnly
        secure: false, // Use only in HTTPS
        sameSite: "Strict", // Adjust as per your needs
        maxAge: 5 * 60 * 1000, // 5 minutes
      };

      // Set cookies
      res.cookie("access_token", accessToken, accessTokenOptions);
      res.cookie("refresh_token", refreshToken, refreshTokenOptions);

      res.json({ message: "Login successful" });
    }
  } catch (err) {
    console.log(err.message);
  }
};


module.exports.ProtectedData = async (req , res)=>{
    console.log(req.body);
        res.send(users);
}
