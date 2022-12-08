import { FC } from "react";
import styles from "../../styles/Cards/Card.module.css";

interface ComponentProps {
    icon: JSX.Element,
    label: string,
    text: string,
}

const Card: FC<ComponentProps> = (props) => {
    const { icon, label, text } = props;
    return (
        <div className={styles.card}>
            {icon}
            <div>
                <p>{label}</p>
                <h2>{text}</h2>
            </div>
        </div>
    );
}

export default Card;