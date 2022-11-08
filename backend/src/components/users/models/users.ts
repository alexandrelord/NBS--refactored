import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    email: string;
    password?: {
        hash: string;
        salt: string;
    };
    accountType: {
        name: string;
        googleId?: string;
    };
}

const UserSchema = new mongoose.Schema<IUser>(
    {
        email: { type: String, default: null, unique: true },
        password: {
            hash: { type: String, required: true },
            salt: { type: String, required: true },
        },
        accountType: {
            name: { type: String, enum: ['local', 'google'], required: true },
            googleId: { type: String, default: null },
        },
        accountType: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model<IUser>('User', UserSchema);
