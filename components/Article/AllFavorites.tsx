import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getFavoriteProjects} from "../../redux/main/mainSlice";
import {_api_url} from "../../redux/store";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import Image from "next/image";
import Link from "next/link";

const AllFavorites = () => {
    const dispatch = useAppDispatch();
    const {favorites} = useAppSelector(state => state.main);

    useEffect(() => {
        if (favorites.length === 0) {
            dispatch(getFavoriteProjects());
        }
    }, []);

    const favoritesData = useMemo(() => {
        if (favorites.length > 0) {
            const arr = favorites.map(item => {
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
                        alt="Обложка проекта"
                    />,
                    text: item.title,
                    href: `/project/${item.id}`,
                })
            })
            return arr;
        } else {
            return []
        }
    }, [favorites])
    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                <Image src="/ranks.svg" alt="фавориты блога" width={30} height={30} />
                <h2>фавориты блога</h2>
            </div>
            <div className={styles.infoPanelContentColumn}>
                {favoritesData?.length > 0 && (
                    <>
                        {favoritesData.map((item) => {
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

export default AllFavorites;
