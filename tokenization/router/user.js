const express = require('express');
const { registerUser, loginUser, ProtectedData } = require('../controller/user');
const { checkValidUser, userAuthentication } = require('../middleware/user');
const router = express.Router();


router.post('/register' , registerUser);
router.post('/login' , loginUser);
router.get('/fruits' , userAuthentication ,  ProtectedData);


module.exports = router;    