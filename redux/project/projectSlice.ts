import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle, IProject, IProjectComment, IProjectState } from "../interfaces/project";
import { _api_url } from "../store";

const initialState: IProjectState = {
    project: {} as IProject,
    article: {} as IArticle,
    loading: false,
    error: '',
}

const projectSlice = createSlice(
    {
        name: 'project',
        initialState,
        reducers: {
            setProject(state, action: PayloadAction<IProject>) {
                state.project = action.payload;
            },
            setArticle(state, action: PayloadAction<IArticle>) {
                state.article = action.payload;
            },
            setLoading(state, action: PayloadAction<boolean>) {
                state.loading = action.payload;
            },
            setError(state, action: PayloadAction<string>) {
                state.error = action.payload;
            },
            setComment(state, action: PayloadAction<IProjectComment>) {
                state.project.comment_to_project.unshift(action.payload);
            }
        },
    }
);

export const {
    setProject,
    setLoading,
    setError,
    setComment,
} = projectSlice.actions;

export default projectSlice.reducer;