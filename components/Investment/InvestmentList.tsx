import React, { FC, useState } from 'react'
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import Button from '../UI/Button';
import { InvestmentListItem } from './InvestmentListItem';

interface ComponentProps {
    icon: JSX.Element;
    title: string;
    data: any[];
    showAll?: boolean;
    background?: string;
    redirect?: () => void,
    type?: 'top5'
}

export const InvestmentList: FC<ComponentProps> = (props) => {
    const { icon, title, data, background = '#F5F5F5', redirect, type, showAll } = props;
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.infoPanel} style={{ background, marginTop: type === 'top5' ? 30 : 0 }}>
            <div className={styles.infoPanelHeader}>
                {icon}
                <h2>{title}</h2>
                {
                    (redirect || showAll) && data.length > 0 && (
                        <Button
                            style={{ marginLeft: "auto" }}
                            text={!expanded ? "Показать все" : 'Топ 5'}
                            handleClick={() => type === 'top5' ? setExpanded(prev => !prev) : redirect?.()}
                        />
                    )
                }
            </div>
            <div className={styles.infoPanelContentColumn}>
                {!expanded ? (
                    <>
                        {
                            data?.length > 0 ? (
                                <>
                                    {data?.slice(0, type === 'top5' ? 5 : 3).map((item) => {
                                        return (
                                            <InvestmentListItem key={item.id} item={item} type={type} />
                                        );
                                    })}
                                </>
                            ) : (
                                <div>Список пока пуст</div>
                            )
                        }
                    </>
                ) : (
                    <>
                        {data?.length > 0 ? (
                            <>
                                {data.map((item) => {
                                    return (
                                        <InvestmentListItem key={item.id} item={item} />
                                    );
                                })}
                            </>
                        ) : (
                            <div>Список пока пуст</div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
