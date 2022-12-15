import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../../styles/Header/Logo.module.css';

interface ILogoProps {
    dark?: boolean
}

const Logo: FC<ILogoProps> = ({ dark }) => {
    return (
        <Link className={`${styles.logoContainer} ${dark ? styles.logoContainerDark : ''}`} href={'/'}>
            <Image src="/logo.svg" alt="Логотип" width={40} height={40} />
            <p>БЛОГ О ZАRАБОТКЕ <span>ZARABARAHOROSHO</span></p>
        </Link>
    );
}

export default Logo;
