import { FC } from "react";
import TopPanelItem from "./TopPanelItem";
import styles from "../../styles/TopPanel/TopPanel.module.css";

interface ComponentProps {
    icon: JSX.Element,
    title: string,
    items: any[]
}

const TopPanel: FC<ComponentProps> = (props) => {
    const {icon, title, items} = props;

    return(
        <div className={styles.topPanel}>
            <div className={styles.topPanelHeader}>
                {icon}
                <p>{title}</p>
            </div>
            <div className={styles.topPanelContent}>
                {items.length > 0 && (
                    <>
                        {items.map((item, idx) => <TopPanelItem key={idx} item={item} />)}
                    </>
                )}
            </div>
        </div>
    );
}

export default TopPanel;