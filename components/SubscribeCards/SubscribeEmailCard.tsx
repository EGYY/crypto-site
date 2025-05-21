import React from "react";
import styles from "../../styles/SubscribeCards/SubscribeCards.module.css";
import Button from "../UI/Button";

export default function SubscribeEmailCard() {
    return (
        <div className={styles.emailCard}>
            <div>
                <p>Получать новости о выходе новых статей на блоге</p>
                <p>Будь в курсе свежих анонсов о наилучших инвестиционных направлениях. <br /> Никакого спама!</p>
                <Button text="Подписаться" handleClick={() => window.open('https://t.me/ZarabaraproBot', '_blank')} />
            </div>
        </div>
    );
}
