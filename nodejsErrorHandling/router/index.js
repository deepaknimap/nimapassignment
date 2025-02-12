import express from 'express';
import { indexRoute } from '../controller/index.js';
const router =  express.Router();


router.get('/' , customwrapper(indexRoute))

export default router;