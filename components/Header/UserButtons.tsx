import React from "react";
import styles from "../../styles/Header/AuthButtons.module.css";
import Button from "../UI/Button";
import ProfileButton from "./ProfileButton";
import {useAppDispatch} from "../../redux/hooks";
import { setAuth, setUser } from "../../redux/user/userSlice";
import {User} from "../../redux/interfaces/user";
import {useRouter} from "next/router";

export default function UserButtons() {
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
        <div className={styles.authButtonsContainer}>
            <ProfileButton />
            <Button text='Выйти' handleClick={handleLogout} />
        </div>
    );
}
