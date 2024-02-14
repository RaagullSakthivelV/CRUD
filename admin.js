import express from 'express';
import {stats,team} from './adminhandler.js';
const router = express.Router();
router.use(express.json())
router.get('/login/stats/:team',team)
router.get('/login/stats',stats)
export default router;