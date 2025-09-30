import express from 'express';
import { ENV } from './lib/env.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import Path from 'path';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const __dirname = Path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: '5mb' })); //req.body
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

//for production
if (ENV.NODE_ENV === 'production') {
  app.use(express.static(Path.join(__dirname, '../frontend/dist')));
  app.get('*', (_, res) => {
    res.sendFile(Path.join(__dirname, '../', 'frontend', 'dist', 'index.html'));
  });
}

app.listen(3000, () => {
  console.log('Server running on port: ', PORT);
  connectDB();
});
