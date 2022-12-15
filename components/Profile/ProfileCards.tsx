import Image from "next/image";
import styles from "../../styles/Cards/Card.module.css";
import Card from "../Card/Card";
import ProfileCard from "../Card/ProfileCard";

export default function ProfileCards() {
    return (
        <div className={styles.cardContainer}>
            <ProfileCard
                icon={<Image src="/avatar.png" alt="Avatar" width={40} height={40} />}
                label="Rick"
                text="Уровень “Профи”"
            />
            <Card
                icon={<Image src="/bug.svg" alt="Мой инвестиционный портфель" width={40} height={40} />}
                label="Мой инвестиционный портфель"
                text="125 369 ₽"
            />
        </div>
    );
}