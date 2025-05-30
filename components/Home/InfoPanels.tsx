import React, { useMemo } from "react";
import Image from "next/image";
import InfoPanel from "../InfoPanel/InfoPanel";
import { useAppSelector } from "../../redux/hooks";
import { _api_url } from "../../redux/store";
import { useRouter } from "next/router";
import IntroBlock from "../InfoPanel/IntroBlock";
import { InvestmentList } from "../Investment/InvestmentList";
import { Banner } from "../Banner/Banner";

export default function InfoPanels() {
    const { projects, articles, favorites, banners } = useAppSelector(state => state.main);
    const navigate = useRouter();

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

    const interestingArticles = useMemo(() => {
        if (articles.length > 0) {
            const arr = articles?.filter(item => item.is_interesting === true)?.map(item => {
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
            return arr?.slice(0, 3);
        } else {
            return []
        }
    }, [articles])

    const newsArticles = useMemo(() => {
        if (articles.length > 0) {
            const arr = articles?.filter(item => item.is_news === true)?.map(item => {
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
            return arr?.slice(0, 4);
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

    const getInvestmentData = (key: string, data: any[]) => {
        const arr = data?.filter(item => item.profit_category === key)?.map(item => {
            return ({
                id: item.id,
                avatar: <Image
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
        })?.slice(0, 3)
        return arr || []
    }

    const startupData = useMemo(() => {
        const arr = getInvestmentData('Startup', projects)
        return arr;
    }, [projects])

    const hightProfitData = useMemo(() => {
        if (projects.length > 0) {
            const arr = getInvestmentData('High Profit', projects)
            return arr;
        } else {
            return []
        }
    }, [projects])


    const middleProfitData = useMemo(() => {
        if (projects.length > 0) {
            const arr = getInvestmentData('Crypto', projects)
            return arr;
        } else {
            return []
        }
    }, [projects])

    const lowProfitData = useMemo(() => {
        if (projects.length > 0) {
            const arr = getInvestmentData('Real Business', projects)
            return arr;
        } else {
            return []
        }
    }, [projects])

    const headerBanner = useMemo(() => {
        if (banners?.length > 0) {
            const banner = banners.find(item => item.position === 'header');
            if (banner && banner.is_active) {
                return banner;
            }
            return null
        }
        return null
    }, [banners])

    const footerBanner = useMemo(() => {
        if (banners?.length > 0) {
            const banner = banners.find(item => item.position === 'footer');
            if (banner && banner.is_active) {
                return banner;
            }
            return null
        }
        return null
    }, [banners])

    return (
        <div>
            <InfoPanel
                icon={<Image src="/new.svg" alt="свежие статьи" width={30} height={30} />}
                title="свежие статьи"
                data={articlesData}
                redirect={() => navigate.push('/articles')}
            />
            {
                headerBanner && (
                    <Banner
                        image={`${_api_url}${headerBanner.image}`}
                        link={headerBanner.link}
                        style={{ maxWidth: 728, width: '100%', height: 90, margin: '0 auto', display: 'flex', cursor: 'pointer' }}
                        title={headerBanner.title}
                        description={headerBanner.description}
                    />
                )
            }

            <IntroBlock />
            <InvestmentList
                icon={<Image src="/startup-icon.png" alt="Инвестиции в стартапы" width={30} height={30} />}
                title="Инвестиции в стартапы"
                data={startupData}
                redirect={() => navigate.push('/projects?category=Startup')}
                background="#EEFFFD"
            />

            <InvestmentList
                icon={<Image src="/high-risk-icon.png" alt="инвестиции в высокодоходные темы (High риск)" width={30} height={30} />}
                title="инвестиции в высокодоходные темы (High риск)"
                data={hightProfitData}
                redirect={() => navigate.push('/projects?category=High Profit')}
                background="#FFEEEE"
            />

            <InvestmentList
                icon={<Image src="/crypto-icon.png" alt="инвестиции в криптовалюты" width={30} height={30} />}
                title="инвестиции в криптовалюты"
                data={middleProfitData}
                redirect={() => navigate.push('/projects?category=Crypto')}
                background="#fffdee"
            />

            <InvestmentList
                icon={<Image src="/bussnies-icon.png" alt="инвестиции в реальный бизнес" width={30} height={30} />}
                title="инвестиции в реальный бизнес"
                data={lowProfitData}
                redirect={() => navigate.push('/projects?category=Real Business')}
                background="#fff8ee"
            />

            <InfoPanel
                icon={<Image src="/finance-icon.png" alt="Интересные статьи о финансах" width={30} height={30} />}
                title="Интересные статьи о финансах"
                data={interestingArticles}
                redirect={() => navigate.push('/articles?type=interesting')}
                background="#F0EEFF"
            />


            <InfoPanel
                icon={<Image src="/ranks.svg" alt="последние новости по проектам" width={30} height={30} />}
                title="последние новости по проектам"
                data={newsArticles}
                redirect={() => navigate.push('/articles?type=news')}
            />
            {
                footerBanner && (
                    <Banner
                        image={`${_api_url}${footerBanner.image}`}
                        link={footerBanner.link}
                        style={{ maxWidth: 728, width: '100%', height: 90, margin: '0 auto', display: 'flex', cursor: 'pointer' }}
                        title={footerBanner.title}
                        description={footerBanner.description}
                    />
                )
            }
        </div>
    );
}

