import mongoose, { Schema } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    googleId: string;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String },
        email: { type: String },
        googleId: { type: String }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);
