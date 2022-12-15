import React, { FC } from "react";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import InfoPanelItem from "./InfoPanelItem";

interface ComponentProps {
    icon: JSX.Element,
    title: string,
    data: any[],
}

const InfoPanel: FC<ComponentProps> = (props) => {
    const { icon, title, data } = props;

    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                {icon}
                <h2>{title}</h2>
            </div>
            <div className={styles.infoPanelContent}>
                {data?.length > 0 && (
                    <>
                        {data.map(item => <InfoPanelItem item={item} key={item.id} />)}
                    </>
                )}
            </div>
        </div>
    );
}

export default InfoPanel;
