import jwt from 'jsonwebtoken';
import { ENV } from '../lib/env.js';

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: '7d',
  });

  res.cookie('jwt', token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //Milliseconds,
    httpOnly: true, //prevent attacks : cross site scripting
    sameSite: 'strict', //csrf attack
    secure: ENV.NODE_ENV === 'development' ? false : true,
  });

  return token;
};
