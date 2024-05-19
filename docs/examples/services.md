// src/services/userService.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export class UserService {
async register(data: { email: string; password: string }) {
const hashedPassword = await bcrypt.hash(data.password, 10);
const user = await prisma.user.create({
data: { email: data.email, password: hashedPassword },
});
return user;
}

async login(data: { email: string; password: string }) {
const user = await prisma.user.findUnique({ where: { email: data.email } });
if (!user || !(await bcrypt.compare(data.password, user.password))) {
throw new Error('Invalid credentials');
}
const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
expiresIn: '1h',
});
return token;
}
}
