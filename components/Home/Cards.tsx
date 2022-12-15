import React from "react";
import Image from "next/image";
import Card from "../Card/Card";
import styles from "../../styles/Cards/Card.module.css";
import {useAppSelector} from "../../redux/hooks";

export default function Cards() {
    const {main_info} = useAppSelector(state => state.main);
    return (
        <div className={styles.cardContainer}>
            <Card
                icon={<Image src="/persons.svg" alt="Кол-во участников блога" width={40} height={40} />}
                label="участников блога"
                text={(Intl.NumberFormat('ru-RU', ).format(main_info.participants_number)).toString()}
            />
            <Card
                icon={<Image src="/bug.svg" alt="Портфель участников" width={40} height={40} />}
                label="Портфель участников"
                text={`${(Intl.NumberFormat('ru-RU', ).format(main_info.sum_investments)).toString()} ₽`}
            />
            <Card
                icon={<Image src="/cup.svg" alt="В закрытом клубе" width={40} height={40} />}
                label="В закрытом клубе"
                text={(Intl.NumberFormat('ru-RU', ).format(main_info.private_club_participants)).toString()}
            />
        </div>
    );
}
