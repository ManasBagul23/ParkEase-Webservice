import Activity from '../models/Activity.js';

export const logActivity = async (req, res) => {
  try {
    const activity = new Activity({ ...req.body, user: req.user.id });
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user.id });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
