import {IGetInfoResponse, IGetProjects, IMainState} from "../interfaces/main";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {_api_url} from "../store";

export const getMainInfo = createAsyncThunk(
    'main/info',
    async function (_, api) {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/main/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw Error('Ошибка получения информации!')
            }
            const data = await response.json();
            return data;
        } catch (e: any) {
            return api.rejectWithValue(e.message);
        }

    }
)

export const getProjects = createAsyncThunk(
    'main/projects',
    async function (_, api) {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/projects/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw Error('Ошибка получения информации!')
            }
            const data = await response.json();
            return data;
        } catch (e: any) {
            return api.rejectWithValue(e.message);
        }

    }
)

export const getArticles = createAsyncThunk(
    'main/articles',
    async function (_, api) {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/articles/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw Error('Ошибка получения информации!')
            }
            const data = await response.json();
            return data;
        } catch (e: any) {
            return api.rejectWithValue(e.message);
        }

    }
)

export const getFavoriteProjects = createAsyncThunk(
    'main/favorites',
    async function (_, api) {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/favourite_projects/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw Error('Ошибка получения информации!')
            }
            const data = await response.json();
            return data;
        } catch (e: any) {
            return api.rejectWithValue(e.message);
        }

    }
)

const initialState: IMainState = {
    main_info: {
        participants_number: 0,
        sum_investments: 0,
        most_active_user: [],
        private_club_participants: 0,
        my_top_five: [],
    },
    loading_main_info: false,
    projects: [],
    articles: [],
    favorites: [],
    loading_projects: false,

}

const mainSlice = createSlice(
    {
        name: 'main',
        initialState,
        reducers: {
            setParticipantsNumber(state, action: PayloadAction<number>) {
                state.main_info.participants_number = action.payload;
            },
            setSumInvestments(state, action: PayloadAction<number>) {
                state.main_info.sum_investments = action.payload;
            },
            setMostActiveUser(state, action: PayloadAction<Array<string>>) {
                state.main_info.most_active_user = action.payload;
            },
            setPrivateClubParticipants(state, action: PayloadAction<number>) {
                state.main_info.private_club_participants = action.payload;
            },
            setMyTopFive(state, action: PayloadAction<Array<any>>) {
                state.main_info.my_top_five = action.payload;
            },
            setArticles(state, action: PayloadAction<IGetProjects[]>) {
                state.articles = action.payload;
            },
            setFavorites(state, action: PayloadAction<IGetProjects[]>) {
                state.favorites = action.payload;
            }
        },
        extraReducers: {
            [getMainInfo.pending.toString()]: (state) => {
                state.loading_main_info = true;
            },
            [getMainInfo.fulfilled.toString()]: (state, action: PayloadAction<IGetInfoResponse>) => {
                state.loading_main_info = false;
                state.main_info = action.payload;
            },
            [getMainInfo.rejected.toString()]: (state) => {
                state.loading_main_info = false;
            },
            [getProjects.pending.toString()]: (state) => {
                state.loading_projects = true;
            },
            [getProjects.fulfilled.toString()]: (state, action: PayloadAction<IGetProjects[]>) => {
                state.loading_projects = false;
                state.projects = action.payload;
            },
            [getProjects.rejected.toString()]: (state) => {
                state.loading_projects = false;
            },
            [getArticles.fulfilled.toString()]: (state, action: PayloadAction<IGetProjects[]>) => {
                state.articles = action.payload;
            },
            [getFavoriteProjects.fulfilled.toString()]: (state, action: PayloadAction<IGetProjects[]>) => {
                state.favorites = action.payload;
            },
        },
    }
)

export const {
    setMostActiveUser,
    setMyTopFive,
    setParticipantsNumber,
    setPrivateClubParticipants,
    setSumInvestments,
    setArticles,
    setFavorites,
} = mainSlice.actions;

export default mainSlice.reducer;

