import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['card', 'wallet', 'upi', 'netbanking'],
      required: true,
    },
    card_number: {
      type: String,
      trim: true,
    },
    expiry_date: {
      type: String,
      trim: true,
    },
    cvv: {
      type: String,
      trim: true,
    },
    wallet_balance: {
      type: Number,
      default: 0,
    },
    is_default: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Payment', paymentSchema);
