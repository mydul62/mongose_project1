import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';

const UserSchema = new Schema<Tuser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ['admin', 'faculty', 'student'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = model<Tuser>('User', UserSchema);

export default UserModel;
