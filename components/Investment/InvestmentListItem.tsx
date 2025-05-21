import Link from 'next/link'
import React, { FC } from 'react'
import styles from "../../styles/InfoPanel/InfoPanel.module.css";

interface ComponentProps {
    item: {
        id: number;
        avatar: JSX.Element;
        text: string;
        href: string;
    }
}

export const InvestmentListItem: FC<ComponentProps> = (props) => {
    const { item } = props;
    return (
        <Link
            href={item.href}
            className={styles.infoPanelItemColumn}
            key={item.id}
        >
            <div
                className={styles.infoPanelItemAvatar}
                style={{ marginRight: 10, marginTop: 0 }}
            >
                {item.avatar}
                <div>{item.id}</div>
            </div>
            <div
                className={styles.infoPanelItemText}
                style={{
                    width: "100%",
                    padding: "20px 10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 40,
                }}
            >
                <span
                    style={{
                        maxWidth: '30vw',
                        whiteSpace: "nowrap",
                    }}
                >
                    {item.text}
                </span>
                <div>{item.text}</div>
            </div>
        </Link>
    )
}
