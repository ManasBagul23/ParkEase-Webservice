import express from 'express';
import User from '../models/User.model.js';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login (basic, without JWT here)
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    // compare password logic here
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update profile
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
