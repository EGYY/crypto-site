import React from "react";
import Image from 'next/image';
import styles from '../../styles/Header/Logo.module.css';

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <Image src="/logo.svg" alt="Логотип" width={40} height={40} />
            <p>БЛОГ О ZАRАБОТКЕ <span>ZARABARAHOROSHO</span></p>
        </div>
    );
}
