import Article from "../../components/Article/Article";
import ArticleComment from "../../components/Article/ArticleComment";
import Cards from "../../components/Home/Cards";
import TopPanels from "../../components/Home/TopPanels";
import Wrapper from "../../components/Wrapper"
import styles from '../../styles/Home.module.css';

const ArticlePage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards />
                        <Article />
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

export default ArticlePage;