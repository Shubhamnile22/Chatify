import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected :', conn.connection.host);
  } catch (error) {
    console.error('Error connnection to DB: ', error);
    process.exit(1); //1 status code means fails, 0 means success
  }
};
