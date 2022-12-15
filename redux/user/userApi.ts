import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {_api_url} from "../store";
import {IUserBodyRegistration, IUserResponse} from "../interfaces/user";

export const userApi = createApi({
    reducerPath: 'user/api',
    baseQuery: fetchBaseQuery({baseUrl: _api_url}),
    endpoints: build => ({
        registration: build.query<IUserResponse, IUserBodyRegistration>({
            query:(body: IUserBodyRegistration) =>({
                url: '/api/v1/users/registration/',
                method: 'POST',
                body: JSON.stringify(body),
            })
        })
    })
})

const { useLazyRegistrationQuery } = userApi;
