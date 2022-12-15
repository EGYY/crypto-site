export interface IGetInfoResponse {
    "participants_number": number,
    "sum_investments": number,
    "most_active_user": string[],
    "private_club_participants": number,
    "my_top_five": string[] | string
}

export interface IMainState {
    main_info: IGetInfoResponse,
    loading_main_info: boolean,
    projects: IGetProjects[],
    loading_projects: boolean,
}

export interface IGetProjects {
    "id": number,
    "title": string,
    "cover": string,
}
