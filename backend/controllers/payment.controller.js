import Payment from '../models/Payment.js';

export const addPaymentMethod = async (req, res) => {
  try {
    const payment = new Payment({ ...req.body, user: req.user.id });
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPaymentMethods = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePaymentMethod = async (req, res) => {
  try {
    await Payment.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Payment method removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
