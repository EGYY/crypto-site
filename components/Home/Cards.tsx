import React from "react";
import Image from "next/image";
import Card from "../Card/Card";
import styles from "../../styles/Cards/Card.module.css";

export default function Cards() {
    return (
        <div className={styles.cardContainer}>
            <Card
                icon={<Image src="/persons.svg" alt="Кол-во участников блога" width={40} height={40} />}
                label="участников блога"
                text="125 369"
            />
            <Card
                icon={<Image src="/bug.svg" alt="Портфель участников" width={40} height={40} />}
                label="Портфель участников"
                text="125 369 000 ₽"
            />
            <Card
                icon={<Image src="/cup.svg" alt="В закрытом клубе" width={40} height={40} />}
                label="В закрытом клубе"
                text="125 чел."
            />
        </div>
    );
}
