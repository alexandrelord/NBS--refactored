import mongoose, { Schema } from 'mongoose';
import type { Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    googleId: string;
}

const UserSchema = new Schema<IUser>(
    {
        username: { type: String },
        email: { type: String },
        googleId: { type: String }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);
