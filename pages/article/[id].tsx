import React, {FC} from "react";
import Cards from "../../components/Home/Cards";
import TopPanels from "../../components/Home/TopPanels";
import Wrapper from "../../components/Wrapper"
import styles from '../../styles/Home.module.css';
import {_api_url} from "../../redux/store";
import { IArticle } from "../../redux/interfaces/project";
import ArticleWithoutActions from "../../components/Article/ArticleWithoutActions";

const ArticlePage: FC<any> = ({article, html}) => {
    return (
        <Wrapper description={`${article.title}. ${article.text}`} title={`${article.title}`}>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards />
                        <ArticleWithoutActions data={article} html={html}/>
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

    const getArticle = async (id: number): Promise<IArticle> => {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/articles/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw Error('Ошибка запроса!')
            }
            const data = await response.json();
            if (data?.notion_id) {
                html = await getNotionHtml(data.notion_id);
            }
            return data;
        } catch (e: any) {
            return {} as IArticle;
        }
    }



    const article = await getArticle(id);

    return {
        props: {
            article,
            html,
        },
    }
}

export default ArticlePage;
