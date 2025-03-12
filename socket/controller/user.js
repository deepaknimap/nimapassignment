const userModel = require("../model/user");
module.exports.createUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    const newUser = new userModel({
      username,
      password,
    });

    let result = await newUser.save();
    res.status(201).json({ msg: "user created", result });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    let user = await userModel.find();
    res.json({ user });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    let result = await userModel.findOne({ username });
    if (result) {
      if (result.password === password) {

        const options = {
          maxAge: 15 * 60 * 1000,
          httpOnly: true,
          secure: true,
          sameSite: "Strict",
        };

        const token  = 'abcd@';

        res
          .status(201)
          .cookie('token'  , token , options)
          .json({ msg: "user login succesfully", result });

      } else {
        res.json({ msg: "enter valid password" });
      }
    } else {
      res.json({ msg: "enter valid credential" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
