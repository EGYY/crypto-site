import React, { FC } from "react";
import Link from "next/link";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";

interface ComponentProps {
  item: {
    id: number;
    avatar: JSX.Element;
    text: string;
    href: string;
  };
}

const InfoPanelItem: FC<ComponentProps> = (props) => {
  const { id, avatar, text, href } = props.item;

  return (
    <Link href={href} className={styles.infoPanelItem}>
      <div className={styles.infoPanelItemAvatar}>
        {avatar}
        <div>{id}</div>
      </div>
      <div className={styles.infoPanelItemText}>
        <p>{text}</p>
        {text?.length > 20 && <div>{text}</div>}
      </div>
    </Link>
  );
};

export default InfoPanelItem;
