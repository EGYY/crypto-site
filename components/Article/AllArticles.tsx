import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getArticles} from "../../redux/main/mainSlice";
import {_api_url} from "../../redux/store";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import Image from "next/image";
import Link from "next/link";

const AllArticles = () => {
    const dispatch = useAppDispatch();
    const {articles} = useAppSelector(state => state.main);

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArticles());
        }
    }, []);

    const articlesData = useMemo(() => {
        if (articles.length > 0) {
            const arr = articles.map(item => {
                return ({
                    id: item.id,
                    avatar: <img
                        src={`${_api_url}${item.cover}`}
                        onError={({currentTarget}) => {
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
    }, [articles])

    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                <Image src="/new.svg" alt="свежие статьи" width={30} height={30}/>
                <h2>свежие статьи</h2>
            </div>
            <div className={styles.infoPanelContentColumn}>
                {articlesData?.length > 0 && (
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
                                        style={{marginRight: 10, marginTop: 0}}
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
                                        <Image
                                            onClick={(e) => e.stopPropagation()}
                                            src={"/delete-icon.svg"}
                                            alt="delete"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default AllArticles;
