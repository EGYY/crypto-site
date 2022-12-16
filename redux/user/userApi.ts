import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Profile } from "../interfaces/user";
import {_api_url} from "../store";

export const userApi = createApi({
    reducerPath: 'user/api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://zarabarahorosho.pro:8000'}),
    refetchOnFocus: true,
    endpoints: build => ({
        getProfile: build.query<Profile, string>({
            query:() =>({
                url: '/api/v1/users/profile/',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
        })
    })
})

export const { useGetProfileQuery } = userApi;
