import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
dotenv.config();

const app = express();

const __dirname = Path.resolve();

const PORT = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

//for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../', 'frontend', 'dist', 'index.html'));
  });
}

app.listen(3000, () => console.log('Server running on port: ', PORT));
