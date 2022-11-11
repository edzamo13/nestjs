import mongoose from 'mongoose';

export const UserShema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

UserShema.index({ username: 1 }, { unique: true });
UserShema.index({ email: 1 }, { unique: true });
