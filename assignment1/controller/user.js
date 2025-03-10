const testModel = require("../model/test");

module.exports.Createuser = async (req, res) => {
  try {
    console.log(req.body);
    let result = await testModel.create(req.body);
    return res.json({
      message: "user created successfully",
      result: result.get({ plain: true }),
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    let result = await testModel.findAll({
      attributes: { exclude: ["lastname", "age"] },
    });
    res.json({ result });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports.getSpecificUser = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await testModel.findByPk(id, {
      attributes: { exclude: ["lastname", "age"] },
    });
    res.json({ result });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};


