import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {_api_url} from "../store";
import {IUserResponse, IUserState, User} from "../interfaces/user";
import {IUserBodyRegistration} from "../interfaces/user";
import {IUserBodyLogin} from "../interfaces/user";

export const registration = createAsyncThunk(
    'user/registration',
    async function (body: IUserBodyRegistration, {rejectWithValue}) {
        try {
            const response = await fetch(`${_api_url}/api/v1/users/registration/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw Error('Ошибка регистрации!')
            }
            const data = await response.json();
            if (!data.token && data.message) {
                throw Error(data.message);
            }
            return data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }

    }
)

export const login = createAsyncThunk(
    'user/login',
    async function (body: IUserBodyLogin, api) {
        try {
            const response = await fetch(`${_api_url}/api/v1/users/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw Error('Ошибка регистрации!')
            }
            const data = await response.json();
            if (!data.token && data.message) {
                throw Error(data.message);
            }
            return data;
        } catch (e: any) {
            return api.rejectWithValue(e.message);
        }

    }
)

const initialState: IUserState = {
    user: {} as User,
    isAuth: false,
    loading: false,
    error: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    },
    extraReducers: {
        [registration.pending.toString()]: (state) => {
            state.error = '';
            state.loading = true;
        },
        [registration.fulfilled.toString()]: (state, action: PayloadAction<IUserResponse>) => {
            state.error = '';
            state.loading = false;
            state.user = {username: action.payload.username, email: '', full_name: ''};
            state.isAuth = true;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify({username: action.payload.username, email: '', full_name: ''}))
        },
        [registration.rejected.toString()]: (state) => {
            state.loading = false;
            state.error = 'Ошибка регистрации!';
        },
        [login.pending.toString()]: (state) => {
            state.error = '';
            state.loading = true;
        },
        [login.fulfilled.toString()]: (state, action: PayloadAction<IUserResponse>) => {
            state.error = '';
            state.loading = false;
            state.user = {username: action.payload.username, email: '', full_name: ''};
            state.isAuth = true;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify({username: action.payload.username, email: '', full_name: ''}))
        },
        [login.rejected.toString()]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {setUser, setAuth, setLoading, setError} = userSlice.actions;

export default userSlice.reducer;
