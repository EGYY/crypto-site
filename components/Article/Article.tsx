import Button from "../UI/Button";
import styles from "../../styles/Article/Article.module.css";
import Modal from "../UI/Modal";
import { FC, useMemo, useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Selecet";
import { _api_url } from "../../redux/store";
import { IProject } from "../../redux/interfaces/project";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFavourite } from "../../redux/user/userSlice";

const Article: FC<{ data: IProject }> = ({ data }) => {
    const dispatch = useAppDispatch();
    const { isAuth } = useAppSelector(state => state.user);
    const [openModal, setOpenModal] = useState(false);
    const [sum, setSum] = useState('0');
    const [currency, setCurrency] = useState('₽');

    const totalDays = useMemo(() => {
        if (data?.how_many_days > 0) {
            return Intl.NumberFormat('ru', { style: 'unit', unit: 'day', unitDisplay: 'long' }).format(data.how_many_days)
        } else {
            return '0 дней'
        }
    }, [data?.how_many_days]);

    const addToFavourite = async () => {
        try {
            const url = `${_api_url}/api/v1/blog/projects/add_to_favour/`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ project: data.id }),
            })
            const json = await response.json();
            dispatch(setFavourite(json));
        } catch (e) {
            console.log(e);
        }
    }

    const addProject = async () => {
        try {
            const body = {
                project: data.id,
                sum,
                currency
            };
            const url = `${_api_url}/api/v1/projects/add/`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(body),
            })
            setOpenModal(false);
            // const json = await response.json();
        } catch(e) {
            console.log(e);
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
                        <li><div></div>кол.просмотров</li>
                        <li><div></div>кол.коментариев</li>
                        <li><div></div>дата публикации</li>
                    </ul>
                    <div>
                        <Button text="Поделиться" style={{ marginRight: 20 }} />
                        <Button text="В избранное"
                            handleClick={() => {
                                console.log(isAuth)
                                if (isAuth) {
                                    addToFavourite();
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={styles.articleContent}>
                    <h2>{data?.title}</h2>
                    <ul>
                        <li>Работает уже <span>{totalDays.split(' ')[0]}</span>{totalDays.split(' ')[1]}</li>
                        <li><div></div><span>{data?.user_review ? data.user_review.toFixed(1) : 0}</span> оценка пользователей</li>
                        <li><div></div>статус: {data?.is_active ? 'Актуален' : 'Не актуален'}</li>
                    </ul>
                    {
                        data?.article_to_project?.length > 0 && (
                            <p>{data.article_to_project[0].text}</p>
                        )
                    }
                    <div>
                        <div>
                            <Button
                                style={{ marginRight: 15 }}
                                handleClick={() => {
                                    if (data.link_to_site) {
                                        window.open(data.link_to_site, '_blank')
                                    }
                                }}
                                text="Перейти на сайт"
                            />
                            <Button text="В портфель" handleClick={() => setOpenModal(true)} />
                        </div>
                        <p>Нашли ошибку?</p>
                    </div>
                </div>
            </div>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <h2 style={{
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '38px',
                    textTransform: 'uppercase',
                }}>Altana Digital Currency Fund</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Input value={sum} onChange={setSum} label="Сумма внесенная в проект" />
                    <Select
                        label="Валюта"
                        value={currency}
                        options={[{ id: 1, value: '₽', title: '₽' }, { id: 2, value: '$', title: '$' }]}
                        onChange={setCurrency}
                    />
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Input value="100 000 000 000 000 000 000" label="Сумма снятия из проекта" onChange={() => console.log(1)} />
                    <Select
                        label="Валюта"
                        value={"$"}
                        options={[{ id: 1, value: '₽', title: '₽' }, { id: 2, value: '$', title: '$' }]}
                        onChange={(value) => console.log(value)}
                    />
                </div> */}
                <div style={{ display: 'flex', marginTop: 64 }}>
                    <Button text="Сохранить" style={{ marginRight: 16 }} handleClick={() => {
                        if (isAuth && +sum > 0) {
                            addProject();
                        }
                    }} />
                    <Button text="Отменить" handleClick={() => setOpenModal(false)} />
                </div>
            </Modal>
        </>

    );
}

export default Article;
