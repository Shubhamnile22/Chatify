import mongoose from 'mongoose';
import { ENV } from '../lib/env.js';

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined');
    }
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log('MongoDB connected :', conn.connection.host);
  } catch (error) {
    console.error('Error connnection to DB: ', error);
    process.exit(1); //1 status code means fails, 0 means success
  }
};
