import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Middleware to Protect Routes - MOVED TO TOP
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, "089a30a0557cf29b58801f0f7a18f163db519245e8e79906e1c0f2e16ee3c587", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const adminUsername = "jatan";
  const adminPassword = "password";

  if (username === adminUsername && password === adminPassword) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Token Verification Route
router.get('/verify', authenticateToken, (req, res) => {
  // If middleware passes, the token is valid
  res.json({
    success: true,
    user: req.user,
    message: 'Token is valid'
  });
});

export { authenticateToken };
export default router;
