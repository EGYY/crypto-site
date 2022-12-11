import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/Cards/Card.module.css";

interface ComponentProps {
    icon: JSX.Element,
    label: string,
    text: string,
}

const ProfileCard: FC<ComponentProps> = (props) => {
    const { icon, label, text } = props;

    return (
        <div className={styles.profileCard}>
            {icon}
            <div>
                <h2>{label}</h2>
                <p>{text}</p>
            </div>
            <Image src="/medal.svg" width={40} height={40} alt="Достижение"/>
        </div>
    );
}

export default ProfileCard;