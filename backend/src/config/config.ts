import dotenv from 'dotenv';

dotenv.config();

export const config = {
    db: {
        url: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.slhir.mongodb.net/NBS`,
    },
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        callbackURL: process.env.GOOGLE_CALLBACK_URL || '',
    },
    jwt: {
        accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || '',
        refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || '',
    },
};
