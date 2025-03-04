const employeeModel = require("../model/employees");

module.exports.postEmployee = async (req, res) => {
  try {
    let result = await employeeModel.create(req.body);
    return res
      .status(201)
      .json({
        result: result.get({ plain: true }),
        message: "user created succesfully",
      });
  } catch (error) {
    console.log(error.message);
  }
};


module.exports.getEmployee = async (req, res) => {
    try {
      let {id} = req.params;
     const result  = await employeeModel.findByPk(id , {
        attributes : ['department']
     });
     let planResult  = result.get({plain : true});
     res.status(201).json({result : planResult});
    } catch (error) {
      console.log(error.message);
    }
  };
