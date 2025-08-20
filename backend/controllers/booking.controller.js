import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking({ ...req.body, user: req.user.id });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('service vehicle');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    await Booking.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Booking canceled' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
