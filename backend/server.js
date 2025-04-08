import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes, { authenticateToken } from './routes/auth.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});