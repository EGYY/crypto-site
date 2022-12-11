import { FC } from "react";
import styles from "../../styles/UI/Button.module.css";

interface ComponentProps {
    text: string,
    handleClick?: () => void,
    style?: React.CSSProperties,
}

const Button: FC<ComponentProps> = (props) => {
    const {text, handleClick, style} = props;

    return(
        <button style={style} className={styles.button} onClick={() => handleClick?.()}>{text}</button>
    )
}

export default Button;