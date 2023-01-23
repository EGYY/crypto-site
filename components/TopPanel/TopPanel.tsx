import React, { FC } from "react";
import TopPanelItem from "./TopPanelItem";
import styles from "../../styles/TopPanel/TopPanel.module.css";

interface ComponentProps {
    icon: JSX.Element,
    title: string,
    items: any[],
    withRoute?: boolean,
}

const TopPanel: FC<ComponentProps> = (props) => {
    const {icon, title, items, withRoute} = props;

    return(
        <div className={styles.topPanel}>
            <div className={styles.topPanelHeader}>
                {icon}
                <p>{title}</p>
            </div>
            <div className={styles.topPanelContent}>
                {items.length > 0 ? (
                    <>
                        {items.map((item) => <TopPanelItem key={item.id} item={item} withRoute={withRoute} />)}
                    </>
                ) : <div>Список пока пуст</div>}
            </div>
        </div>
    );
}

export default TopPanel;
