import { FC } from "react";
import styles from "../../styles/TopPanel/TopPanel.module.css";

interface ComponentProps {
    item: {
        avatar: JSX.Element,
        name: string,
    }
}

const TopPanelItem: FC<ComponentProps> = (props) => {
    const {avatar, name} = props.item;

    return(
        <div className={styles.topPanelContentItem}>
            {avatar}
            <p>{name}</p>
        </div>
    );
}

export default TopPanelItem;