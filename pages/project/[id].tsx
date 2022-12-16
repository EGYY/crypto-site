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

const ProjectPage: FC<any> = ({project}) => {
    const dispatch = useAppDispatch();
    const {project: projectState} = useAppSelector(state => state.project);

    useEffect(() => {
        if (project) {
            dispatch(setProject(project));
        }
    }, [project, dispatch])


    return (
        <Wrapper>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards />
                        <Article data={projectState}/>
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
            return data;
        } catch (e: any) {
            return {} as IProject;
        }
    }

    const project = await getProject(id);

    return {
        props: {
            project
        },
    }
}

export default ProjectPage;
