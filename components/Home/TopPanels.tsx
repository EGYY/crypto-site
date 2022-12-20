import React, {useMemo} from "react";
import Image from "next/image";
import TopPanel from "../TopPanel/TopPanel";
import {useAppSelector} from "../../redux/hooks";
import styles from "../../styles/TopPanel/TopPanel.module.css";

export default function TopPanels() {
    const {main_info} = useAppSelector(state => state.main);

    const topUsers = useMemo(() => {
        if (main_info.most_active_user.length > 0) {
            const arr = main_info.most_active_user.map((item, idx) => {
                return {
                    id: idx,
                    avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
                    name: item,
                }
            });
            return arr;
        } else {
            return [];
        }
    }, [main_info.most_active_user]);

    const topInvests = useMemo(() => {
        if (main_info.my_top_five instanceof Array && main_info.my_top_five.length > 0) {
            const arr = main_info.my_top_five.map((item, idx) => {
                return {
                    id: idx,
                    avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
                    name: item,
                }
            });
            return arr;
        } else {
            return [];
        }
    }, [main_info.my_top_five]);

    return (
        <div className={styles.topPanelContainer}>
            <TopPanel
                icon={<Image src="/flag.svg" alt="Аватар" width={40} height={40} />}
                title="топ-5 Самых активных пользователей"
                items={topUsers}
            />

            <TopPanel
                icon={<Image src="/moneyChart.svg" alt="Аватар" width={40} height={40} />}
                title="топ 5 “Моих инвестиций” "
                items={topInvests}
            />
        </div>
    )
}
