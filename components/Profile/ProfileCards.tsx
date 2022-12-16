import Image from "next/image";
import { useAppSelector } from "../../redux/hooks";
import styles from "../../styles/Cards/Card.module.css";
import Card from "../Card/Card";
import ProfileCard from "../Card/ProfileCard";

export default function ProfileCards() {
    const {profile, user} = useAppSelector(state => state.user);

    return (
        <div className={styles.cardContainer}>
            <ProfileCard
                icon={<Image src="/avatar.png" alt="Avatar" width={40} height={40} />}
                label={user?.username ?? 'Не указан'}
                text="Уровень “Профи”"
            />
            <Card
                icon={<Image src="/bug.svg" alt="Мой инвестиционный портфель" width={40} height={40} />}
                label="Мой инвестиционный портфель"
                text={`${Intl.NumberFormat('ru-RU', ).format(profile.my_investment_portfolio)} ₽`}
            />
        </div>
    );
}