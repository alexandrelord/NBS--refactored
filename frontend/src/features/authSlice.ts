import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface IAuthState {
    isAuthenticated: boolean;
    authUser: any | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    authUser: null
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        }
    }
});

export const { setIsAuthenticated, setAuthUser } = AuthSlice.actions;
export const selectAuthUser = (state: RootState) => state.auth.authUser;
export default AuthSlice.reducer;
