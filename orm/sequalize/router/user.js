const express = require('express');
const router = express.Router();
const {createUser, getUser, getSpecificUser, updateUser, removeUser} = require('../controller/user');

router.route('/')
.post(createUser)
.get(getUser)


router.route('/:id')
.get(getSpecificUser)
.patch(updateUser)
.delete(removeUser)


module.exports = router;