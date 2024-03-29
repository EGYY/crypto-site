import {toast} from "react-toastify";
import Button from "../UI/Button";
import styles from "../../styles/Article/Article.module.css";
import Modal from "../UI/Modal";
import {FC, useEffect, useMemo, useState} from "react";
import Input from "../UI/Input";
import Select from "../UI/Selecet";
import {_api_url} from "../../redux/store";
import {IProject} from "../../redux/interfaces/project";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setProfile} from "../../redux/user/userSlice";
import {useLazyGetProfileQuery} from "../../redux/user/userApi";
import {getMainInfo} from "../../redux/main/mainSlice";

const Article: FC<{ data: IProject; html?: string }> = ({data, html}) => {
    const dispatch = useAppDispatch();
    const {isAuth, profile} = useAppSelector((state) => state.user);
    const [openModal, setOpenModal] = useState(false);
    const [sum, setSum] = useState("1");
    const [currency, setCurrency] = useState("₽");
    const [getProfile, {data: profileData}] = useLazyGetProfileQuery();

    const status = useMemo(() => {
        if (data?.status) {
            switch (data.status) {
                case "Actual":
                    return <span style={{color: '#ECC911'}}>АКТУАЛЕН</span>;
                case "Not Actual":
                    return <span style={{color: '#EC1111'}}>НЕ АКТУАЛЕН</span>;
                default:
                    return <span style={{color: '#000'}}>ПРОБЛЕМНЫЙ</span>
            }
        }

        return <span style={{color: '#EC1111'}}>НЕИЗВЕСТЕН</span>;
    }, [data]);

    useEffect(() => {
        if (isAuth && !profile.message) {
            getProfile("");
        }
    }, [isAuth, profile]);

    useEffect(() => {
        if (profileData?.message === "ok") {
            dispatch(setProfile(profileData));
        }
    }, [profileData, dispatch]);

    const inFavorite = useMemo(() => {
        if (profile?.favourites?.length > 0) {
            const isFavoure = profile.favourites.filter(
                (item) => item.id_project === data.id
            );
            if (isFavoure.length > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }, [profile?.favourites, data?.id]);

    const totalDays = useMemo(() => {
        if (data?.how_many_days > 0) {
            return Intl.NumberFormat("ru", {
                style: "unit",
                unit: "day",
                unitDisplay: "long",
            }).format(data.how_many_days);
        } else {
            return "0 дней";
        }
    }, [data?.how_many_days]);

    const addToFavourite = async () => {
        try {
            const url = `${_api_url}/api/v1/blog/projects/add_to_favour/`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({project: data.id}),
            });

            if (!response.ok) {
                throw Error("Ошибка добавления в избранное");
            }
            getProfile("");
            toast("❤️ Проект усешно добавлен в избранное!");
        } catch (e: any) {
            toast(e.message);
        }
    };

    const addProject = async () => {
        try {
            const body = {
                project: data.id,
                sum,
                currency,
            };
            const url = `${_api_url}/api/v1/projects/add/`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw Error("Ошибка добавления проекта в портфель");
            }
            const json = await response.json();

            if (json.message) {
                toast(json.message);
            }
            setOpenModal(false);
            dispatch(getMainInfo());
        } catch (e: any) {
            toast(e.message);
        }
    };

    const handleShareProject = async () => {
        try {
            await navigator.clipboard.writeText(
                `https://zarabarahorosho.pro/project/${data.id}`
            );
            toast("Ссылка на проект успешно скопирована!");
        } catch (err) {
            toast("Ошибка копирования!");
        }
    };

    return (
        <>
            <div className={styles.article}>
                <div className={styles.articleHeader}>
                    <img
                        src={`${_api_url}${data.cover}`}
                        onError={({currentTarget}) => {
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
                            <div>{data.comment_to_project?.length ?? 0}</div>
                            кол.коментариев
                        </li>
                        {data?.created_at && (
                            <li>
                                <div>
                                    {new Intl.DateTimeFormat("ru-RU", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    }).format(new Date(data.created_at))}
                                </div>
                                дата публикации
                            </li>
                        )}
                    </ul>
                    <div>
                        <Button
                            text="Поделиться"
                            style={{marginRight: 20}}
                            handleClick={handleShareProject}
                        />
                        <Button
                            text={inFavorite ? "В избранном" : "В избранное"}
                            handleClick={() => {
                                if (isAuth && !inFavorite) {
                                    addToFavourite();
                                } else if (inFavorite) {
                                    toast("Уже в избранном");
                                    return;
                                } else {
                                    toast(
                                        "❤️ Для добавления проекта в избранное необходимо авторизоваться"
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={styles.articleContent}>
                    <h2>{data?.title}</h2>
                    <ul>
                        <li>
                            Работает уже <span>{totalDays.split(" ")[0]}</span>
                            {totalDays.split(" ")[1]}
                        </li>
                        <li>
                            <span>{data?.user_review ? data.user_review.toFixed(1) : 0}</span>{" "}
                            оценка пользователей
                        </li>
                        <li>статус: {status}</li>
                    </ul>
                    {html && <div dangerouslySetInnerHTML={{__html: html}}></div>}
                    <div>
                        <div>
                            <Button
                                style={{marginRight: 15}}
                                handleClick={() => {
                                    if (data.link_to_site) {
                                        window.open(data.link_to_site, "_blank");
                                    } else {
                                        toast("Сайт для проекта не указан");
                                    }
                                }}
                                text="Перейти на сайт"
                            />
                            <Button
                                text="В портфель"
                                handleClick={() => setOpenModal(true)}
                            />
                        </div>
                        <p>Нашли ошибку?</p>
                    </div>
                </div>
            </div>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <h2
                    style={{
                        fontWeight: "700",
                        fontSize: "32px",
                        lineHeight: "38px",
                        textTransform: "uppercase",
                    }}
                >
                    {data?.title}
                </h2>
                <div className={"group-modal-inputs"}>
                    <Input
                        value={sum}
                        onChange={(value) => {
                            if (value.length > 0) {
                                value.match(/^[0-9]+$/) && setSum(value);
                            } else {
                                setSum("");
                            }
                        }}
                        label="Сумма внесенная в проект"
                    />
                    <Select
                        label="Валюта"
                        value={currency}
                        options={[
                            {id: 1, value: "₽", title: "₽"},
                            {id: 2, value: "$", title: "$"},
                        ]}
                        onChange={setCurrency}
                    />
                </div>
                {sum.length === 0 && (
                    <div className="error-msg">Поле с суммой не должно быть пустым</div>
                )}
                <div style={{display: "flex", marginTop: 64}}>
                    <Button
                        text="Сохранить"
                        style={{marginRight: 16}}
                        handleClick={() => {
                            if (isAuth && +sum > 0) {
                                addProject();
                            } else {
                                toast(
                                    "Для добавления проекта в портфолио необходимо авторизоваться"
                                );
                            }
                        }}
                    />
                    <Button text="Отменить" handleClick={() => setOpenModal(false)}/>
                </div>
            </Modal>
        </>
    );
};

export default Article;
