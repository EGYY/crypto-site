import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProjects } from "../../redux/main/mainSlice";
import { _api_url } from "../../redux/store";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const AllProjects = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { query } = router;
    const { projects } = useAppSelector(state => state.main);

    useEffect(() => {
        if (projects.length === 0) {
            dispatch(getProjects());
        }
    }, []);

    const projectsData = useMemo(() => {
        if (projects.length > 0) {
            const data = query ? projects.filter(item => item.profit_category === query.category) : projects;
            const arr = data.map(item => {
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
    }, [projects, query])

    const title = useMemo(() => {
        switch (query.category) {
            case 'Startup':
                return 'Инвестиции в стартапы'
            case 'High Profit':
                return 'инвестиции в высокодоходные темы (High риск)'
            case 'Crypto':
                return 'инвестиции в криптовалюты'
            case 'Real Business':
                return 'инвестиции в реальный бизнес'
            default:
                return 'свежие проекты'
        }
    }, [query])

    const icon = useMemo(() => {
        switch (query.category) {
            case 'Startup':
                return '/startup-icon.png'
            case 'High Profit':
                return '/high-risk-icon.png'
            case 'Crypto':
                return '/crypto-icon.png'
            case 'Real Business':
                return '/bussnies-icon.png'
            default:
                return '/idea.svg'
        }
    }, [query])

    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                <Image src={icon} alt={title} width={30} height={30} />
                <h2>{title}</h2>
            </div>
            <div className={styles.infoPanelContentColumn}>
                {projectsData?.length > 0 && (
                    <>
                        {projectsData.map((item) => {
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
                                                maxWidth: '30vw',
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
                )}
            </div>
        </div>
    );
};

export default AllProjects;
