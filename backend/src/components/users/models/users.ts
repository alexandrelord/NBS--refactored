import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    email: string;
    password?: {
        hash: string;
        salt: string;
    };
}

const UserSchema = new mongoose.Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        password: {
            hash: { type: String },
            salt: { type: String },
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model<IUser>('User', UserSchema);
