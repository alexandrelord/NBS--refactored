import dotenv from 'dotenv';

dotenv.config();

export const config = {
    mongo: {
        url: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.slhir.mongodb.net/NBS`
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        callbackURL: process.env.GOOGLE_CALLBACK_URL || ''
    }
};
