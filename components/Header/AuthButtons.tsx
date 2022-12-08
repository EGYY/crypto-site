import Button from "../UI/Button";
import styles from "../../styles/Header/AuthButtons.module.css";

export default function AuthButtons() {
    return(
        <div className={styles.authButtonsContainer}>
            <Button text='Регистрация' />
            <Button text='Войти' />
        </div>
    )
}