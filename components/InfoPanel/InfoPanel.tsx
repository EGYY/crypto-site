import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import Button from "../UI/Button";
import InfoPanelItem from "./InfoPanelItem";

interface ComponentProps {
    icon: JSX.Element,
    title: string,
    data: any[],
    showAll?: boolean,
}

const InfoPanel: FC<ComponentProps> = (props) => {
    const { icon, title, data, showAll } = props;

    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                {icon}
                <h2>{title}</h2>
                {showAll && <Button style={{marginLeft: 'auto'}} text="Все статьи" />}
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