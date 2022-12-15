import React, {FC} from "react";
import Article from "../../components/Article/Article";
import ArticleComment from "../../components/Article/ArticleComment";
import Cards from "../../components/Home/Cards";
import TopPanels from "../../components/Home/TopPanels";
import Wrapper from "../../components/Wrapper"
import styles from '../../styles/Home.module.css';
import {_api_url} from "../../redux/store";

const ProjectPage: FC<any> = ({project}) => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards />
                        <Article data={project}/>
                        <ArticleComment />
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

    const getProject = async (id: number) => {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/projects/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw Error('Ошибка запроса!')
            }
            const json = await response.json();
            return json;
        } catch (e) {
            return {}
        }
    }

    const project = await getProject(id);

    // console.log(project)
    return {
        props: {
            project
        },
    }
}

export default ProjectPage;
