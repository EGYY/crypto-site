import React, { FC, useState } from "react";
import Link from "next/link";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import Button from "../UI/Button";
import InfoPanelItem from "./InfoPanelItem";

interface ComponentProps {
  icon: JSX.Element;
  title: string;
  data: any[];
  showAll?: boolean;
  redirect?: () => void,
  background?: string,
}

const InfoPanel: FC<ComponentProps> = (props) => {
  const { icon, title, data, showAll = false, redirect, background = '#F5F5F5' } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.infoPanel} style={{ background }}>
      <div className={styles.infoPanelHeader}>
        {icon}
        <h2>{title}</h2>
        {showAll && data?.length > 0 && (
          <Button
            style={{ marginLeft: "auto" }}
            text={expanded ? "Скрыть" : "Показать все"}
            handleClick={() => setExpanded(!expanded)}
          />
        )}
        {!showAll && redirect && data?.length > 0 && (
          <Button
            style={{ marginLeft: "auto" }}
            text={"Показать все"}
            handleClick={() => redirect()}
          />
        )}
      </div>
      {!expanded ? (
        <div className={styles.infoPanelContent}>
          {data?.length > 0 ? (
            <>
              {data.slice(0, 4).map((item) => (
                <InfoPanelItem item={item} key={item.id} />
              ))}
            </>
          ) : (
            <div>Список пока пуст</div>
          )}
        </div>
      ) : (
        <div className={styles.infoPanelContentColumn}>
          {data?.length > 0 && (
            <>
              {data.map((item) => {
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
                          maxWidth: 152,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.text}
                      </span>
                      <div>{item.text}</div>
                      {/* <Image
                        onClick={(e) => e.stopPropagation()}
                        src={"/delete-icon.svg"}
                        alt="delete"
                        width={16}
                        height={16}
                      /> */}
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default InfoPanel;
