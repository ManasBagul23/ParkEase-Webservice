import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    action: {
      type: String,
      required: true,
      trim: true,
      enum: [
        'booking_created',
        'booking_cancelled',
        'payment_made',
        'wallet_topup',
        'profile_updated',
        'vehicle_added',
        'vehicle_removed',
      ],
    },
    reference_id: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'onModel', // dynamically refers to Booking, Transaction, etc.
    },
    onModel: {
      type: String,
      enum: ['Booking', 'Transaction', 'Vehicle', 'User'],
    },
    description: {
      type: String,
      trim: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Activity', activitySchema);
