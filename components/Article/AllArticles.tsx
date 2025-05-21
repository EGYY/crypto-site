import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getArticles } from "../../redux/main/mainSlice";
import { _api_url } from "../../redux/store";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const AllArticles = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { query } = router;
    const { articles } = useAppSelector(state => state.main);

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArticles());
        }
    }, []);

    const articlesData = useMemo(() => {
        if (articles.length > 0) {
            let filteredData = articles;
            if (query.type === 'news') {
                filteredData = articles.filter(item => item.is_news === true);
            }
            if (query.type === 'interesting') {
                filteredData = articles.filter(item => item.is_interesting === true);
            }
            const arr = filteredData.map(item => {
                return ({
                    id: item.id,
                    avatar: <img
                        src={`${_api_url}${item.cover}`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "/infoPanelAvatar.png";
                        }}
                        width={40}
                        height={40}
                        alt="Обложка статьи"
                    />,
                    text: item.title,
                    href: `/article/${item.id}`,
                })
            })
            return arr;
        } else {
            return []
        }
    }, [articles, query])

    const title = useMemo(() => {
        switch (query.type) {
            case 'news':
                return 'последние новости по проектам'
            case 'interesting':
                return 'Интересные статьи о финансах'
            default:
                return 'свежие проекты'
        }
    }, [query])

    const icon = useMemo(() => {
        switch (query.type) {
            case 'news':
                return '/finance-icon.png'
            case 'interesting':
                return '/ranks.svg'
            default:
                return '/new.svg'
        }
    }, [query])

    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                <Image src={icon} alt={title} width={30} height={30} />
                <h2>{title}</h2>
            </div>
            <div className={styles.infoPanelContentColumn}>
                {articlesData?.length > 0 ? (
                    <>
                        {articlesData.map((item) => {
                            return (
                                <Link
                                    href={item.href}
                                    className={styles.infoPanelItemColumn}
                                    key={item.id}
                                >
                                    <div
                                        className={styles.infoPanelItemAvatar}
                                        style={{ marginRight: 10, marginTop: 0 }}
                                    >
                                        {item.avatar}
                                        <div>{item.id}</div>
                                    </div>
                                    <div
                                        className={styles.infoPanelItemText}
                                        style={{
                                            width: "100%",
                                            padding: "20px 10px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            height: 40,
                                        }}
                                    >
                                        <span
                                            style={{
                                                maxWidth: 152,
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {item.text}
                                        </span>
                                        <div>{item.text}</div>
                                        {/* <Image
                                            onClick={(e) => e.stopPropagation()}
                                            src={"/delete-icon.svg"}
                                            alt="delete"
                                            width={16}
                                            height={16}
                                        /> */}
                                    </div>
                                </Link>
                            );
                        })}
                    </>
                ) : <div>Список пока пуст</div>}
            </div>
        </div>
    );
};

export default AllArticles;
