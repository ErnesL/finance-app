// src/controllers/userController.ts

import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const register = async (req: Request, res: Response) => {
try {
const user = await userService.register(req.body);
res.status(201).json(user);
} catch (error) {
res.status(400).json({ error: error.message });
}
};

export const login = async (req: Request, res: Response) => {
try {
const token = await userService.login(req.body);
res.status(200).json({ token });
} catch (error) {
res.status(401).json({ error: error.message });
}
};
