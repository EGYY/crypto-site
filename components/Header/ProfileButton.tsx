import React from "react";
import styles from "../../styles/Header/ProfileButton.module.css";
import Link from 'next/link'
import {useAppSelector} from "../../redux/hooks";

export default function ProfileButton() {
    const {user} = useAppSelector(state => state.user);

    return (
        <Link className={styles.profileButtonContainer} href={'/profile'}>
            <img
                src="http://android-obzor.com/wp-content/uploads/2022/03/m93uqn-1024x819.png"
                alt="user avatar"
                width={40}
                height={40}
            />
            <div>
                <p>{user.username ?? 'Аноним'}</p>
                <p>Личный кабинет</p>
            </div>
        </Link>
    )
}
