import React from "react";
import Image from "next/image";
import styles from "../../styles/InfoPanel/InfoPanel.module.css";

const WhyUsInfoPanel = () => {
    return (
        <div className={styles.infoPanel}>
            <div className={styles.infoPanelHeader}>
                <Image src="/idea.svg" alt="10 причин" width={30} height={30} />
                <h2>10 причин читать блог Zarabara Horosho</h2>
            </div>
 
                <div className={styles.infoPanelContentColumn}>
                    <ol>
                        <li><span>Лучшие финансовые инструменты</span></li>
                        <li>Полезная информация для <span>новичков</span> и не только</li>
                        <li><span>Самые свежие</span> анонсы новых проектов</li>
                        <li><span>Инструкции</span> по работе с криптовалютами</li>
                        <li><span>Бесплатные сигналы</span> на покупку акций/крипты</li>
                        <li><span>Полностью прозрачная информация</span> о моем инвестиционном портфеле</li>
                        <li>Постоянный <span>мониторинг рынка</span></li>
                        <li><span>Инсайды</span> и другая информация, о которой читатели блога узнают первыми</li>
                        <li><span>Алгоритмы действий</span> на пути к финансовой независимости</li>
                        <li><span>Поощрение</span> наиболее активных пользователей блога</li>
                    </ol>
                </div>
        </div>
    );
}

export default WhyUsInfoPanel;
