const express = require('express');
const router = express.Router();
const {getProduct, postProduct} = require('../controller/product')

router.route('/')
.get(getProduct)
.post(postProduct);


module.exports = router;