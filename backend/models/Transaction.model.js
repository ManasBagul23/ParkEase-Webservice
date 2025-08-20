import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking', // optional if transaction is linked to a booking
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['debit', 'credit'],
      required: true,
    },
    method: {
      type: String,
      enum: ['wallet', 'card', 'upi', 'netbanking'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Transaction', transactionSchema);
