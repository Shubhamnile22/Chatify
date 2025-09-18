import jwt from 'jsonwebtoken';
import { ENV } from '../lib/env.js';

export const generateToken = (userId) => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: '7d',
  });

  return token;
};
