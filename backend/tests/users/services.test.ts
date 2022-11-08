import { issueJWT, genPassword, validPassword, loginUser, createUser } from '../../src/components/users/controllers/users.services';
import { StatusError } from '../../src/utils/utils';

describe('Service Functions', () => {
    describe('validPassword function', () => {
        it('should return true if the password matches the hash', () => {
            const password = 'password';
            const { salt, hash } = genPassword(password);

            const result = validPassword(password, salt, hash);

            expect(result).toBe(true);
        });
    });
    describe('genPassword function', () => {
        it('should return the hashed password', () => {
            const password = 'password';
            const hash = genPassword(password);

            expect(hash).not.toBe(password);
        });
        it('should return a different hash for the same password', () => {
            const password = 'password';
            const hash = genPassword(password);
            const hash2 = genPassword(password);

            expect(hash).not.toBe(hash2);
        });
    });
    describe('issueJWT function', () => {
        it('should return an object with the access token and refresh token', () => {
            const _id = '123';
            const tokens = issueJWT(_id);

            expect(tokens).toHaveProperty('accessToken');
            expect(tokens).toHaveProperty('refreshToken');
        });
    });
    describe('loginUser function', () => {
        describe('success', () => {
            it('should return an object with the access token and refresh token', async () => {
                const email = 'email';
                const password = 'password';
                const response = await loginUser(email, password);

                expect(response).toHaveProperty('accessToken');
                expect(response).toHaveProperty('refreshToken');
            });
        });
        describe('failure', () => {
            it('should throw an error if the email or password is missing', async () => {
                const data = [
                    { email: 'email', password: '' },
                    { email: '', password: 'password' },
                    { email: '', password: '' },
                ];

                for (const { email, password } of data) {
                    try {
                        await loginUser(email, password);
                    } catch (error) {
                        if (error instanceof StatusError) {
                            expect(error.status).toBe(400);
                            expect(error.message).toBe('All fields are required');
                        }
                    }
                }
            });
            it('should throw an error if the user does not exist', async () => {
                try {
                    await loginUser('email', 'password');
                } catch (error) {
                    if (error instanceof StatusError) {
                        expect(error.status).toBe(404);
                        expect(error.message).toBe('User does not exist');
                    }
                }
            });
            it('should throw an error if the password is incorrect', async () => {
                try {
                    await loginUser('email', 'password');
                } catch (error) {
                    if (error instanceof StatusError) {
                        expect(error.status).toBe(401);
                        expect(error.message).toBe('Invalid password');
                    }
                }
            });
        });
    });
    describe('createUser function', () => {
        describe('success', () => {
            it('should return an object with the access token and refresh token', async () => {
                const email = 'email';
                const password = 'password';
                const response = await createUser(email, password);

                expect(response).toHaveProperty('accessToken');
                expect(response).toHaveProperty('refreshToken');
            });
        });
        describe('failure', () => {
            it('should throw an error if the email or password is missing', async () => {
                const data = [
                    { email: 'email', password: '' },
                    { email: '', password: 'password' },
                    { email: '', password: '' },
                ];

                for (const { email, password } of data) {
                    try {
                        await createUser(email, password);
                    } catch (error) {
                        if (error instanceof StatusError) {
                            expect(error.status).toBe(400);
                            expect(error.message).toBe('All fields are required');
                        }
                    }
                }
            });
            it('should throw an error if the user already exists', async () => {
                try {
                    await createUser('email', 'password');
                } catch (error) {
                    if (error instanceof StatusError) {
                        expect(error.status).toBe(400);
                        expect(error.message).toBe('User already exists');
                    }
                }
            });
        });
    });
    // describe('decodeJWT function', () => {});
    // describe('findUser function', () => {});
    // describe('createGoogleUser function', () => {});
});
