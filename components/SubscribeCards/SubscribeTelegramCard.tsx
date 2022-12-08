import Image from "next/image";
import Button from "../UI/Button";
import styles from "../../styles/SubscribeCards/SubscribeCards.module.css";

export default function SubscribeTelegramCard() {
    return (
        <div className={styles.telegramCard}>
            <Image src="/telegram.svg" alt="telegram" width={232} height={232} />
            <div>
                <p>
                    Подписывайся на мой Telegram канал и всегда будь в курсе последних новостей
                </p>
                <Button text="TELEGRAM" />
            </div>
        </div>
    );
}