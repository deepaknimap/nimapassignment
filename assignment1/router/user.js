const express = require("express");
const { Createuser, getUser, getSpecificUser } = require("../controller/user");
const router = express.Router();

router.route("/").post(Createuser)
.get(getUser);



router.route('/:id')
.get(getSpecificUser)



module.exports = router;