import React from "react";
import Image from "next/image";
import styles from "../../styles/SubscribeCards/SubscribeCards.module.css";
import Button from "../UI/Button";

export default function SubscribeEmailCard() {
    return (
        <div className={styles.emailCard}>
            <Image src="/mailbox.svg" alt="email" width={198} height={200} />
            <div>
                <p>Новости прямо на почту!</p>

                <p>Будь в курсе свежих анонсов о наилучших инвестиционных направлениях. <br /> Никакого спама!</p>
                <Button text="Подписаться" />
            </div>
        </div>
    );
}
