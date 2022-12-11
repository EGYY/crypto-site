import { FC } from "react";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import ChartComponent from "../Profile/ChartComponent";

interface ComponentProps {
    icon: JSX.Element,
    title: string,
}

const InfoStatisticPanel: FC<ComponentProps> = (props) => {
    const { icon, title} = props;

    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                {icon}
                <h2>{title}</h2>
            </div>
            <div className={styles.infoPanelContent}>
                <div style={{width: 288, height: 288}}>
                    <ChartComponent />
                </div>
                <div style={{width: 288, height: 288}}>
                    <ChartComponent />
                </div>
                <div style={{width: 288, height: 288}}>
                    <ChartComponent />
                </div>
            </div>
        </div>
    );
}

export default InfoStatisticPanel;