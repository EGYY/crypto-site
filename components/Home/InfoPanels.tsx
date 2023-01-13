import React, { useMemo } from "react";
import Image from "next/image";
import InfoPanel from "../InfoPanel/InfoPanel";
import { useAppSelector } from "../../redux/hooks";
import { _api_url } from "../../redux/store";
import WhyUsInfoPanel from "../InfoPanel/WhyUsInfoPanel";

export default function InfoPanels() {
    const { projects, articles, favorites } = useAppSelector(state => state.main);

    const projectsData = useMemo(() => {
        if (projects.length > 0) {
            const arr = projects.map(item => {
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
    }, [projects])

    const articlesData = useMemo(() => {
        if (articles.length > 0) {
            const arr = articles.map(item => {
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
    }, [articles])

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
        <div>
            <InfoPanel
                icon={<Image src="/new.svg" alt="свежие статьи" width={30} height={30} />}
                title="свежие статьи"
                data={articlesData}
                showAll={true}
            />
            <WhyUsInfoPanel />
            <InfoPanel
                icon={<Image src="/idea.svg" alt="свежие проекты" width={30} height={30} />}
                title="свежие проекты"
                data={projectsData}
                showAll={true}
            />
            <InfoPanel
                icon={<Image src="/ranks.svg" alt="фавориты блога" width={30} height={30} />}
                title="фавориты блога"
                data={favoritesData}
                showAll={true}
            />
        </div>
    );
}

