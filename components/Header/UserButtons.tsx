import styles from "../../styles/Header/AuthButtons.module.css";
import Button from "../UI/Button";
import ProfileButton from "./ProfileButton";

export default function UserButtons() {
    return (
        <div className={styles.authButtonsContainer}>
            <ProfileButton />
            <Button text='Выйти' />
        </div>
    );
}