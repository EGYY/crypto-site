import { FC } from "react";
import { IProjectComment } from "../../redux/interfaces/project";
import styles from "../../styles/Article/ArticleComment.module.css";
import ArticleListCommentItem from "./ArticleListCommentItem";

interface IComponentProps {
    data: IProjectComment[]
}

const ArticleListComments: FC<IComponentProps> = ({data}) => {
    return (
        <div className={styles.articleCommentContainer}>
            <h2>Комментарии</h2>
            {data?.length > 0 ? (
                <>
                    {data.map(item => <ArticleListCommentItem key={item.id} item={item} />)}
                </>
            ) : <div>Пока нет комментариев</div>}
        </div>
    )
}

export default ArticleListComments;