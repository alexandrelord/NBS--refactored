import { Request, Response } from 'express';
import { IUser } from '../models/users';
import { issueJWT, loginUser, createUser, decodeJWT } from './users.services';
import { StatusError } from '../../../utils/utils';

export const googleLogin = (req: Request, res: Response) => {
    const { _id } = req.user as IUser;

    try {
        const { accessToken, refreshToken } = issueJWT(_id);

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
        });

        res.status(200).json({
            accessToken: accessToken,
        });
    } catch (err) {
        res.status(500);
    }
};

export const localLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const { accessToken, refreshToken } = await loginUser(email, password);

        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true });

        return res.status(200).json({ accessToken });
    } catch (error) {
        if (error instanceof StatusError) {
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json({ error });
    }
};

export const localRegister = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const { accessToken, refreshToken } = await createUser(email, password);

        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true });

        return res.status(200).json({ accessToken });
    } catch (error) {
        if (error instanceof StatusError) {
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json({ error });
    }
};

export const refreshToken = async (req: Request, res: Response) => {
    const { jwt } = req.cookies;

    try {
        const accessToken = await decodeJWT(jwt);

        return res.status(200).json({ accessToken });
    } catch (error) {
        if (error instanceof StatusError) {
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json({ error });
    }
};
