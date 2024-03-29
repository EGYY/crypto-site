import React, {FC, useEffect} from "react";
import Article from "../../components/Article/Article";
import ArticleComment from "../../components/Article/ArticleComment";
import Cards from "../../components/Home/Cards";
import TopPanels from "../../components/Home/TopPanels";
import Wrapper from "../../components/Wrapper"
import styles from '../../styles/Home.module.css';
import {_api_url} from "../../redux/store";
import ArticleListComments from "../../components/Article/ArticleListComments";
import { IProject } from "../../redux/interfaces/project";
import { setProject } from "../../redux/project/projectSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const ProjectPage: FC<any> = ({project, html}) => {
    const dispatch = useAppDispatch();
    const {project: projectState} = useAppSelector(state => state.project);

    useEffect(() => {
        if (project) {
            dispatch(setProject(project));
        }
    }, [project, dispatch])


    return (
        <Wrapper description={`${project.title}`} title={`${project.title}`}>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards />
                        <Article data={projectState} html={html}/>
                        <ArticleComment />
                        <ArticleListComments data={projectState?.comment_to_project ?? []} />
                    </div>
                    <div className='col-8'>
                        <TopPanels />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export const  getServerSideProps = async (context: any) => {
    const id = context?.params?.id;
    let html = ''

    const getNotionHtml = async (id: string) => {
        try {
            const url = `${_api_url}/api/v1/blog/simple/?notion=${id}`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Ошибка получения статьи с notion');
            }
            return response.text();
        } catch(e: any) {
            return '';
        }
    }

    const getProject = async (id: number): Promise<IProject> => {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/projects/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw Error('Ошибка запроса!')
            }
            const data = await response.json();
            if (data?.article_to_project?.length > 0) {
                if (data.article_to_project[0]?.notion_id) {
                    html = await getNotionHtml(data.article_to_project[0].notion_id);
                }
            }
            return data;
        } catch (e: any) {
            return {} as IProject;
        }
    }

    const project = await getProject(id);

    return {
        props: {
            project,
            html,
        },
    }
}

export default ProjectPage;
