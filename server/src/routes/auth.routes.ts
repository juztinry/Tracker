import express, { Request, Response, NextFunction } from 'express';
import { login, register, logout, getCurrentUser } from '../controllers/auth.controller';

const router = express.Router();

// Wrap the controller functions to handle Express routing correctly
router.post('/login', (req: Request, res: Response, next: NextFunction) => login(req, res));
router.post('/register', (req: Request, res: Response, next: NextFunction) => register(req, res));
router.post('/logout', (req: Request, res: Response, next: NextFunction) => logout(req, res));
router.get('/me', (req: Request, res: Response, next: NextFunction) => getCurrentUser(req, res));

export default router;
