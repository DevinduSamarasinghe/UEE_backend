import express from 'express';
import { getInformation } from '../controllers/controller.js';

const router = express.Router();

router.get('/hello',getInformation);

export default router;