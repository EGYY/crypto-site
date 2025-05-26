import React, { useMemo } from "react";
import Image from "next/image";
import TopPanel from "../TopPanel/TopPanel";
import { useAppSelector } from "../../redux/hooks";
import styles from "../../styles/TopPanel/TopPanel.module.css";
import { Banner } from "../Banner/Banner";

export default function TopPanels() {
    const { main_info } = useAppSelector(state => state.main);

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

    return (
        <div className={styles.topPanelContainer}>
            <Banner
                image={'https://www.calltouch.ru/blog/wp-content/uploads/2019/01/kak-sdelat-banner-dlya-sajta-samostoyatelno-1024x576.jpg'}
                link="https://github.com/"
                style={{ maxWidth: 300, width: '100%', height: 330, margin: '20px auto', display: 'flex', cursor: 'pointer' }}
            />
            <TopPanel
                icon={<Image src="/moneyChart.svg" alt="Аватар" width={40} height={40} />}
                title="Рекомендую присмотреться"
                withRoute={true}
                items={topInvests}
            />
            <Banner
                image={'https://www.calltouch.ru/blog/wp-content/uploads/2019/01/kak-sdelat-banner-dlya-sajta-samostoyatelno-1024x576.jpg'}
                link="https://github.com/"
                style={{ maxWidth: 240, width: '100%', height: 120, margin: '0 auto', display: 'flex', cursor: 'pointer' }}
            />
        </div>
    )
}
