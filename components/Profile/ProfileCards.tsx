import Image from "next/image";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import styles from "../../styles/Cards/Card.module.css";
import Card from "../Card/Card";
import ProfileCard from "../Card/ProfileCard";
import Button from "../UI/Button";
import React from "react";
import {useRouter} from "next/router";
import {setAuth, setUser} from "../../redux/user/userSlice";
import {User} from "../../redux/interfaces/user";

export default function ProfileCards() {
    const {profile, user} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        dispatch(setAuth(false));
        dispatch(setUser({} as User));
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        await router.push('/');
    }

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
            <Button text='Выйти' handleClick={handleLogout} />
        </div>
    );
}
