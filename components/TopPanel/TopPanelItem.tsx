import Link from "next/link";
import React, { FC } from "react";
import styles from "../../styles/TopPanel/TopPanel.module.css";

interface ComponentProps {
    item: {
        avatar: JSX.Element,
        name: string,
        id: number,
    },
    withRoute?: boolean,
}

const TopPanelItem: FC<ComponentProps> = (props) => {
    const { avatar, name, id } = props.item;
    const { withRoute } = props;

    return (
        <>
            {withRoute ? (
                <Link href={`/project/${id}`} className={styles.topPanelContentItem}>
                    {avatar}
                    <p>{name}</p>
                </Link>
            ) : (
                <div className={styles.topPanelContentItem}>
                    {avatar}
                    <p>{name}</p>
                </div>
            )}
        </>

    );
}

export default TopPanelItem;
