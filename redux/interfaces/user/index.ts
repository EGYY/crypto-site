export interface IUserBodyRegistration {
    "username": string,
    "email": string,
    "password": string,
    "full_name": string
}

export type User = Omit<IUserBodyRegistration, 'password'>

export interface IUserResponse {
    "token": string,
    "user": User,
    "message": string,
    "username": string,
}

export interface IUserState {
    user: User,
    isAuth: boolean,
    loading: boolean,
    error: string,
}

export interface IUserBodyLogin {
    "username": string,
    "password": string
}
