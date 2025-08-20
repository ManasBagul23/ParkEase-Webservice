import express from 'express';
import Vehicle from '../models/Vehicle.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ user: req.params.userId });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
