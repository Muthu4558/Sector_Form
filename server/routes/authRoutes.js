import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);

export default router;
