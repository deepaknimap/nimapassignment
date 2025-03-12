const express = require('express');
const { createMessage, getAllMessage } = require('../controller/message');
const router = express.Router();

router.post('/' , createMessage)
router.get('/:conversationId' ,  getAllMessage);
module.exports = router;