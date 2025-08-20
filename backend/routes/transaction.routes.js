import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const tx = new Transaction(req.body);
    await tx.save();
    res.status(201).json(tx);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const txs = await Transaction.find({ user: req.params.userId }).populate('booking');
    res.json(txs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id).populate('booking');
    res.json(tx);
  } catch (error) {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

export default router;
