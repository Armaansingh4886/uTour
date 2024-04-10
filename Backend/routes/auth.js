import express from "express";
import {register, login, verifyemail} from './../controllers/authController.js';

const router = express.Router()
router.get('/verifyemail/:id', verifyemail)
router.post('/register', register);
router.post('/login', login);

 export default router;