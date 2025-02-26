const express = require('express');
const { registerUser, loginUser, ProtectedData } = require('../controller/user');
const { checkValidUser } = require('../middleware/user');
const router = express.Router();


router.post('/register' , registerUser);
router.post('/login' , loginUser);
router.get('/protecteddata' , checkValidUser ,  ProtectedData  )

module.exports = router;    