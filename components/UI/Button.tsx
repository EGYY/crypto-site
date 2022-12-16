import React, { FC } from "react";
import styles from "../../styles/UI/Button.module.css";

interface ComponentProps {
    text: string,
    handleClick?: () => void,
    loading?: boolean,
    style?: React.CSSProperties,
}

const Button: FC<ComponentProps> = (props) => {
    const { text, handleClick, style, loading } = props;

    return (
        <button
            disabled={loading}
            style={style}
            className={styles.button}
            onClick={() => handleClick?.()}
        >
            {loading ? 'Загрузка...' : text}
        </button>
    )
}

export default Button;
