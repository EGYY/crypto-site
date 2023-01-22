//auth interfaces
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
    "active": boolean,
}

export interface IUserState {
    user: User,
    profile: Profile,
    isAuth: boolean,
    loading: boolean,
    error: string,
    active: boolean,

}

export interface IUserBodyLogin {
    "username": string,
    "password": string
}
//end auth interfaces

//profile
export interface InvestedTotalGraphic {
    invested_total: number;
    labels: string[];
    data: number[];
}

export interface BredTotalGraphic {
    bred_total: number;
    labels: string[];
    data: number[];
}

export interface ProfitGraphic {
    profit_total: number;
    labels: string[];
    data: number[];
}

export interface IProfileFavorite {
    id_project: number,
    title_project: string,
    cover: string
}

export interface Profile {
    message: string;
    favourites: IProfileFavorite[];
    my_investment_portfolio: number;
    invested_total_graphic: InvestedTotalGraphic;
    bred_total_graphic: BredTotalGraphic;
    profit_graphic: ProfitGraphic;
}
//end profile

