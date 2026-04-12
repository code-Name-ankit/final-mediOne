import express from 'express';
import { findNearestLabs, addLab } from '../controllers/labController.js';

const router = express.Router();

router.get('/search', findNearestLabs);
router.post('/add', addLab);

export default router;