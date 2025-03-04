const express = require('express');
const { postEmployee, getEmployee } = require('../controller/employee');
const router =  express.Router();

router.route('/')
.post(postEmployee);


router.route('/:id')
.get(getEmployee);



module.exports = router;