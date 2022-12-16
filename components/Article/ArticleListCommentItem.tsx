import { FC } from "react";
import { IProjectComment } from "../../redux/interfaces/project";
import styles from "../../styles/Article/ArticleComment.module.css";
import Rate from "./Rate";

interface IComponentProps {
    item: IProjectComment
}

const ArticleListCommentItem: FC<IComponentProps> = ({ item }) => {
    return (
        <div className={styles.articleCommentListItem}>
            <div className={styles.articleCommentListItemAvatar}>{item?.profile?.toString().at(0) ?? 'А'}</div>
            <div className={styles.articleCommentListItemCoomentContent}>
                <div>{item.profile ?? 'Аноним'}</div>
                <Rate value={item.rating} type={'small'} />
                <div className={styles.articleCommentListItemComentText}>
                    <b>Комментарий</b>
                    <span>{item.text}</span>
                </div>
                <span>{Intl.DateTimeFormat('ru-RU').format(new Date(item.created_at))}</span>
            </div>
        </div>
    )
}

export default ArticleListCommentItem;