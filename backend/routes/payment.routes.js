import express from 'express';
import Payment from '../models/Payment.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.params.userId });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Payment method deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
