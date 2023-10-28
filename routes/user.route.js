import express from 'express';
import { getUsers, signInUser, signUpUser, getUserbyEmail, getUserById } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',getUserbyEmail);
router.get('/:id',getUserById);
router.get('/all',getUsers);
router.post('/signup',signUpUser);
router.post('/signin',signInUser);


export default router;

