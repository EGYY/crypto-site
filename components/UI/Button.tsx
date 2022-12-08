import { FC } from "react";
import styles from "../../styles/UI/Button.module.css";

interface ComponentProps {
    text: string,
    handleClick?: () => void,
}

const Button: FC<ComponentProps> = (props) => {
    const {text, handleClick} = props;

    return(
        <button className={styles.button} onClick={() => handleClick?.()}>{text}</button>
    )
}

export default Button;