import express from 'express';
import Activity from '../models/Activity.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.params.userId })
      .populate('reference_id');
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
