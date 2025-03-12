const express = require('express');
const { createUser, loginUser, getUser } = require('../controller/user');
const router = express.Router();

router.route('/')
.post(createUser)
.get(getUser)


router.post('/login' , loginUser)


module.exports = router;