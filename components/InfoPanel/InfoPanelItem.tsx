import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";

interface ComponentProps {
    item: {
        id: number,
        avatar: JSX.Element,
        text: string,
    },
}

const InfoPanelItem: FC<ComponentProps> = (props) => {
    const {id, avatar, text} = props.item;

    return(
        <Link href={`/article/test`} className={styles.infoPanelItem}>
            <div className={styles.infoPanelItemAvatar}>
                {avatar}
                <div>{id}</div>
            </div>
            <div className={styles.infoPanelItemText}>{text}</div>
        </Link>
    );
}

export default InfoPanelItem;