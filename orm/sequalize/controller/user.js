const user = require("../model/user");

module.exports.getUser = async (req, res) => {
  try {
    let result = await user.findAll({ attributes: ["name", "email"] });

    res.status(200).json({
      result,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.getSpecificUser = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await user.findByPk(id, { attributes: ["name", "email"] });
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.createUser = async (req, res) => {
  try {
    let { name, email, age } = req.body;

    let result = await user.create({
      name,
      email,
      age,
    });

    res.status(201).json({
      user: result.get({ plain: true }),
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let updatedUser = await user.update(req.body, { where: { id } });
    res.json(updatedUser);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.removeUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await user.findByPk(1);
    await user.destroy({ where: { id } });
    res.json({
      result: data.get({ plan: true }),
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
