import { FC, useMemo } from "react";
import { useAppSelector } from "../../redux/hooks";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";
import ChartComponent from "../Profile/ChartComponent";

interface ComponentProps {
    icon: JSX.Element,
    title: string,
}

const InfoStatisticPanel: FC<ComponentProps> = (props) => {
    const { icon, title } = props;
    const { profile } = useAppSelector(state => state.user);

    const investedTotalData = useMemo(() => {
        if (profile.invested_total_graphic) {
            const labels = profile.invested_total_graphic.labels;

            const data = {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Всего инвестировано',
                        lineTension: 0.3,
                        data: profile.invested_total_graphic.data,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };

            return data
        } else {
            const labels =[
                "Декабрь",
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь"
            ];
            const data = {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Всего инвестировано',
                        lineTension: 0.3,
                        data: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };

            return data;
        }
    }, [profile.invested_total_graphic])

    const bredTotalData = useMemo(() => {
        if (profile.bred_total_graphic) {
            const labels = profile.bred_total_graphic.labels;

            const data = {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Всего получено',
                        lineTension: 0.3,
                        data: profile.bred_total_graphic.data,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };

            return data
        } else {
            const labels =[
                "Декабрь",
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь"
            ];
            const data = {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Всего получено',
                        lineTension: 0.3,
                        data: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };

            return data;
        }
    }, [profile.bred_total_graphic])

    const profitTotalData = useMemo(() => {
        if (profile.profit_graphic) {
            const labels = profile.profit_graphic.labels;

            const data = {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Прибыль',
                        lineTension: 0.3,
                        data: profile.profit_graphic.data,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };

            return data
        } else {
            const labels =[
                "Декабрь",
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь"
            ];
            const data = {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Прибыль',
                        lineTension: 0.3,
                        data: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };

            return data;
        }
    }, [profile.profit_graphic])

    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                {icon}
                <h2>{title}</h2>
            </div>
            <div className={styles.infoPanelContent}>
                <div style={{ width: 288, height: 288 }}>
                    {/* investedTotal chart */}
                    <ChartComponent data={investedTotalData} />
                </div>
                <div style={{ width: 288, height: 288 }}>
                    {/* bredTotal chart */}
                    <ChartComponent data={bredTotalData} />
                </div>
                <div style={{ width: 288, height: 288 }}>
                    {/* profitTotal chart */}
                    <ChartComponent data={profitTotalData} />
                </div>
            </div>
        </div>
    );
}

export default InfoStatisticPanel;