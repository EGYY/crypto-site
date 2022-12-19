import { toast } from 'react-toastify';
import Button from "../UI/Button";
import styles from "../../styles/Article/Article.module.css";
import { FC } from "react";
import { _api_url } from "../../redux/store";
import { IArticle } from "../../redux/interfaces/project";

const ArticleWithoutActions: FC<{ data: IArticle }> = ({ data }) => {
    const handleShareProject = async () => {
        try {
            await navigator.clipboard.writeText(`https://zarabarahorosho.pro/project/${data.id}`);
            toast('Ссылка на статью успешно скопирована!')
        } catch (err) {
            toast('Ошибка копирования!')
        }
    }

    return (
        <>
            <div className={styles.article}>
                <div className={styles.articleHeader}>
                    <img
                        src={`${_api_url}${data.cover}`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "/articleBG.png";
                        }}
                        alt="article background"
                    />
                    <ul>
                        <li>
                            <div>{data.number_of_views}</div>
                            кол.просмотров
                        </li>
                        <li>
                            <div>{data?.created_at && new Intl.DateTimeFormat('ru-RU', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(data.created_at))}</div>
                            дата публикации
                        </li>
                    </ul>
                    <div>
                        <Button text="Поделиться" style={{ marginRight: 20 }} handleClick={handleShareProject} />
                    </div>
                </div>
                <div className={styles.articleContent}>
                    <h2>{data?.title}</h2>
                    {/* <ul>
                        <li>Работает уже <span>{totalDays.split(' ')[0]}</span>{totalDays.split(' ')[1]}</li>
                        <li>
                            <span>{data?.user_review ? data.user_review.toFixed(1) : 0}</span> оценка пользователей
                        </li>
                        <li>
                            статус: {data?.is_active ? 'Актуален' : 'Не актуален'}</li>
                    </ul> */}
                    <p>{data?.text}</p>
                    <div>
                        <div>
                        </div>
                        <p>Нашли ошибку?</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticleWithoutActions;
