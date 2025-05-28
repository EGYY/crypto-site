export interface IGetInfoResponse {
    participants_number: number,
    sum_investments: number,
    most_active_user: string[],
    private_club_participants: number,
    my_top_five: { id: number, title: string }[]
}

export interface IBanner {
    id: number
    title: string
    description: string
    image: string
    link: string
    position: "sidebar_top" | "sidebar_bottom" | "header" | "footer",
    is_active: boolean
}

export interface IMainState {
    main_info: IGetInfoResponse,
    loading_main_info: boolean,
    projects: IGetProjects[],
    articles: IGetProjects[],
    favorites: IGetProjects[],
    loading_projects: boolean,
    banners: IBanner[]
}

export interface IGetProjects {
    id: number,
    title: string,
    cover: string,
    paragraph: string,
    profit_category: string,
    is_interesting: boolean,
    is_news: boolean,
}

