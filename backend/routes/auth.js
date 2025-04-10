import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Middleware to Protect Routes
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  console.log('🔒 Received token:', token);

  if (!token) {
    console.log('❌ No token provided');
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('❌ Token verification failed:', err.message);
      return res.sendStatus(403);
    }
    console.log('✅ Token verified, user:', user);
    req.user = user;
    next();
  });
};

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('📥 Login attempt:', { username, password });

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;
  console.log('🔐 Admin credentials:', { adminUsername, adminPassword });

  if (username === adminUsername && password === adminPassword) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('✅ Login successful, token generated:', token);
    res.json({ success: true, token, message: 'Login successful' });
  } else {
    console.log('❌ Invalid credentials');
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Token Verification Route
router.get('/verify', authenticateToken, (req, res) => {
  console.log('🔍 Token verified route accessed by:', req.user);
  res.json({
    success: true,
    user: req.user,
    message: 'Token is valid'
  });
});

export { authenticateToken };
export default router;
