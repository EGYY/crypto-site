import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {IProject, IProjectComment} from "../../redux/interfaces/project";
import { setError, setLoading, setComment as setCommentTopProject, setProject } from "../../redux/project/projectSlice";
import { _api_url } from "../../redux/store";
import styles from "../../styles/Article/ArticleComment.module.css";
import Button from "../UI/Button";
import Rate from "./Rate";

const ArticleComment = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { isAuth } = useAppSelector(state => state.user);
    const { error, loading, project } = useAppSelector(state => state.project);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    const getProject = async (id: number): Promise<IProject> => {
        try {
            const response = await fetch(`${_api_url}/api/v1/blog/projects/${id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw Error('Ошибка запроса!')
            }
            const data = await response.json();
            dispatch(setProject(data));
            return data;
        } catch (e: any) {
            return {} as IProject;
        }
    }

    const sendReview = async () => {
        dispatch(setLoading(true));
        try {
            const url = `${_api_url}/api/v1/blog/comments/add/`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ project: router.query.id, rating, text: comment })
            })

            if (!response.ok) {
                throw Error('Ошибка запроса на сервер!');
            }

            const json = await response.json();

            if (json.message) {
                throw Error(json.message);
                return;
            }
            setComment('');
            setRating(1);
            dispatch(setCommentTopProject(json));
            await getProject(project.id)
            toast('Комментарий успешно отправлен!')
        } catch (e: any) {
            dispatch(setError(e.message));
        } finally {
            dispatch(setLoading(false));
        }
    }

    const handleSendReview = async () => {
        dispatch(setError(''))
        if (comment.length === 0) {
            dispatch(setError('Комментарий не должен быть пустым!'))
            return
        }

        if (!isAuth) {
            dispatch(setError('Для отправки комментария вы должны быть авторизованы'))
        }

        if (isAuth) {
            await sendReview();
        }
    }

    return (
        <div className={styles.articleCommentContainer}>
            <h2>Оставить комментарий</h2>
            <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder={'Напишите комментарий'}
            />
            {error && <div className="error-msg">{error}</div>}
            <div>
                <Rate value={rating} onChange={setRating} />
                <Button text="оставить отзыв" handleClick={handleSendReview} loading={loading} />
            </div>
        </div>
    );
}

export default ArticleComment;
