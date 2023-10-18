import express from 'express';
import { getUsers, signInUser, signUpUser, getUserbyEmail } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/:email',getUserbyEmail);
router.get('/',getUsers);
router.post('/signup',signUpUser);
router.post('/signin',signInUser);


export default router;

