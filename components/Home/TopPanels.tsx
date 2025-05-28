import React, { useMemo } from "react";
import Image from "next/image";
import TopPanel from "../TopPanel/TopPanel";
import { useAppSelector } from "../../redux/hooks";
import styles from "../../styles/TopPanel/TopPanel.module.css";
import { Banner } from "../Banner/Banner";
import { _api_url } from "../../redux/store";

export default function TopPanels() {
    const { main_info, banners } = useAppSelector(state => state.main);

    const topInvests = useMemo(() => {
        if (main_info.my_top_five instanceof Array && main_info.my_top_five.length > 0) {
            const arr = main_info.my_top_five.map((item) => {
                return {
                    id: item.id,
                    avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
                    name: item.title,
                }
            });
            return arr?.slice(0, 5);
        } else {
            return [];
        }
    }, [main_info.my_top_five]);

    const sidebarTopBanner = useMemo(() => {
        if (banners?.length > 0) {
            const banner = banners.find(item => item.position === 'sidebar_top');
            if (banner && banner.is_active) {
                return banner;
            }
            return null
        }
        return null
    }, [banners])

    const sidebarBottomBanner = useMemo(() => {
        if (banners?.length > 0) {
            const banner = banners.find(item => item.position === 'sidebar_bottom');
            if (banner && banner.is_active) {
                return banner;
            }
            return null
        }
        return null
    }, [banners])

    return (
        <div className={styles.topPanelContainer}>
            {sidebarTopBanner && (
                <Banner
                    image={`${_api_url}${sidebarTopBanner.image}`}
                    link={sidebarTopBanner.link}
                    style={{ maxWidth: 300, width: '100%', height: 330, margin: '20px auto', display: 'flex', cursor: 'pointer' }}
                />
            )}

            <TopPanel
                icon={<Image src="/moneyChart.svg" alt="Аватар" width={40} height={40} />}
                title="Рекомендую присмотреться"
                withRoute={true}
                items={topInvests}
            />
            {
                sidebarBottomBanner && (
                    <Banner
                        image={`${_api_url}${sidebarBottomBanner.image}`}
                        link={sidebarBottomBanner.link}
                        style={{ maxWidth: 240, width: '100%', height: 120, margin: '0 auto', display: 'flex', cursor: 'pointer' }}
                    />
                )
            }
        </div>
    )
}
