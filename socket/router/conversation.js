const express = require('express');
const { CreateConversation, getConversation } = require('../controller/conversation');
const router = express.Router();


router.post('/' , CreateConversation);

router.get('/:id' ,  getConversation)



module.exports = router;