import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/userRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import activityRoutes from './routes/activityRoutes.js';

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/activities', activityRoutes);

mongoose.connect('mongodb://localhost:27017/parkease')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('Server running on port 5000'));
