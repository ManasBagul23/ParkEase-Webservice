import Transaction from '../models/Transaction.js';

export const createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction({ ...req.body, user: req.user.id });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).populate('booking');
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
