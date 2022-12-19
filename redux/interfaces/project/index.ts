export interface IProjectComment {
    id: number,
    text: string,
    created_at: string,
    updated_at: string,
    rating: number,
    project: number,
    profile?: string,
}

export interface IArticle {
    id: number,
    title: string,
    text: string,
    cover: string,
    created_at: string,
    updated_at: string,
    is_favourite: boolean,
    project: number,
    number_of_views: number,
}

export interface IProject {
    id: number,
    title: string,
    cover: string,
    number_of_views: number,
    created_at: string,
    user_review: number,
    is_active: boolean,
    how_many_days: number,
    link_to_site: string | null,
    article_to_project: IArticle[],
    comment_to_project: IProjectComment[],
}

export interface IProjectState {
    project: IProject,
    article: IArticle,
    loading: boolean,
    error: string,
}