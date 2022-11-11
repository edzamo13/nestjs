import mongoose from 'mongoose';

export const PassengerShema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true },
);

PassengerShema.index({ email: 1 }, { unique: true });
