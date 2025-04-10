import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes, { authenticateToken } from './routes/auth.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
// Middleware
app.use(express.json());

const allowedOrigins = [
  'https://jatan-ngo-webproject-1.onrender.com/' // replace with your actual frontend domain
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true // only if you're using cookies or auth headers
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 3000}`);
});
